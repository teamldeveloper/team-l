import { Footer, Navbar } from "../../components";
import { Header, SignInWithGoogleBtn, firebaseConfig } from "./components";

import { googleLogout } from "@react-oauth/google";
import { initializeApp } from "firebase/app";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  GoogleAuthProvider,
  deleteUser,
  getAuth,
  getRedirectResult,
  onAuthStateChanged,
  reauthenticateWithCredential,
  signInWithRedirect,
  signOut,
} from "firebase/auth";

import axios from "axios";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
auth.useDeviceLanguage();
const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/drive.appdata");

const logout = () => {
  signOut(auth);
  googleLogout();
};

function showErrorMessage(message) {
  toast.error(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
}

function showSuccessMessage(message) {
  toast.success(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
}

const Home = () => {
  const [user, setUser] = useState([]);
  const [isSignIn, setIsSignIn] = useState(false);
  const [driveFiles, setDriveFiles] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      console.log("onAuthStateChanged: i fire once");

      if (user) {
        console.log("User is SignIn");
        await getRedirectResult(auth)
          .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            console.log("Token: " + credential.accessToken);
            localStorage.setItem("credential", token);
            // IdP data available using getAdditionalUserInfo(result)
          })
          .catch((error) => {
            // Handle Errors here.
            console.log(error);
            // The AuthCredential type that was used.
          });
        const accessToken = window.localStorage.getItem("credential"); //setAccessToken((_) => accessToken);

        checkAccessTokenValidation(accessToken);

        setUser((_) => user);
        setIsSignIn((value) => true);
      } else {
        setIsSignIn((value) => false);
        setUser((value) => null);
        console.log("User is Sign in ");
        logout();
      }
    });

    function checkAccessTokenValidation(accessToken) {
      var result = false;
      axios
        .get("https://www.googleapis.com/oauth2/v1/tokeninfo", {
          headers: {
            Accept: "application/json",
          },
          params: {
            access_token: accessToken,
          },
        })
        .then((response) => {
          getGoogleDriveInfo(accessToken);
        })
        .catch(function (error) {
          result = false;
          if (error.response) {
            if (error.response.data.error === "invalid_token") {
              showErrorMessage(
                "Your session has timed out. Please sign in again.n"
              );
              logout();
            }
            console.log(error.response.data.error);
            console.log(error.response.status);
          }
        })
        .finally(function () {
          // always executed
        });
      return result;
    }

    const getGoogleDriveInfo = async (accessToken) => {

      axios
        .get("https://www.googleapis.com/drive/v3/files", {
          headers: {
            Authorization: "Bearer " + accessToken,
            Accept: "application/json",
          },
          params: {
            spaces: "appDataFolder",
            fields: "nextPageToken, files(id, name, modifiedTime)",
          },
        })
        .then((response) => {
          console.log(response);
          response.data.files.forEach((file) => {
            if (file.name === "debt_record_db.sqlite") {
              console.log(file);
              setDriveFiles((_) => file);
            }
          });
          //console.log(response.data.files[0].name);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    };

    console.log("i fire once");
    return () => unsubscribe();
  }, []);

  async function signIn() {
    const provider = new GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/drive.appdata");

    signInWithRedirect(auth, provider);
  }

  const accessToken = window.localStorage.getItem("credential");
  return (
    <div>
      <Navbar />
      <Header />
      <ToastContainer />

      <div className=" flex flex-col items-center p-8">
        {isSignIn ? (
          <ProfileInfo
            profileImg={user.photoURL}
            name={user.displayName}
            email={user.email}
            driveFiles={driveFiles}
            accessToken={accessToken}
          />
        ) : (
          <SignInWithGoogleBtn onClick={signIn} />
        )}
      </div>

      <Footer />
    </div>
  );
};
const ProfileInfo = ({ profileImg, name, email, driveFiles, accessToken }) => {
  console.log(profileImg);

  function padTwoDigits(num) {
    return num.toString().padStart(2, "0");
  }

  function dateInYyyyMmDdHhMmSs(date, dateDiveder) {
    return (
      [
        date.getFullYear(),
        padTwoDigits(date.getMonth() + 1),
        padTwoDigits(date.getDate()),
      ].join(dateDiveder) +
      " " +
      [
        padTwoDigits(date.getHours()),
        padTwoDigits(date.getMinutes()),
        padTwoDigits(date.getSeconds()),
      ].join(":")
    );
  }

  function deleteAccountWithBackupFile() {
    if (driveFiles == null) {
      deleteAccount();
      return;
    }

    axios
      .delete(`https://www.googleapis.com/drive/v3/files/${driveFiles.id}`, {
        headers: {
          Authorization: "Bearer " + accessToken,
          Accept: "application/json",
        },
        params: {
          spaces: "appDataFolder",
        },
      })
      .then((response) => {
        deleteAccount();
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        showErrorMessage(
          "Unexpected error occurred, Please try to sign in again"
        );
        logout();
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

  function deleteAccount() {
    const credential = GoogleAuthProvider.credential(null, accessToken);
    reauthenticateWithCredential(auth.currentUser, credential)
      .then((sucess) => {
        deleteUser(auth.currentUser)
          .then(() => {
            showSuccessMessage("Account Deleted successfully");
          })
          .catch((error) => {
            showErrorMessage(
              "Unexpected error occurred, Please try to sign in again"
            );
            logout();
            console.log(error.code);
          });
      })
      .catch((error) => {
        showErrorMessage(
          "Unexpected error occurred, Please try to sgin in again"
        );
        logout();
      });
    return;
  }
  console.log(driveFiles);
  return (
    <div className="flex flex-col items-center">
      <img
        src={profileImg}
        className="h-28 w-28 md:h-36 md:w-36 border-2 rounded-full bg-grey"
        alt={name}
      />
      <h6 className="text-xl font-medium pt-5 pb-1 md:text-xl">{name}</h6>
      <p className="text-lg  text-black/80 ">{email}</p>
      <p className="pt-8  text-lg font-medium ">
        Please be aware that upon deleting your account, you will permanently
        remove your Google Drive backup associated with the account.
      </p>
      <p className="pb-8 pt-2 text-lg  ">
        {" "}
        <strong>Last Backup Date: </strong>
        {driveFiles
          ? dateInYyyyMmDdHhMmSs(new Date(driveFiles.modifiedTime), "/")
          : "No backup found for this account"}
      </p>

      <div className="flex flex-row ">
        <button
          onClick={deleteAccountWithBackupFile}
          className=" bg-red-500 text-white p-2 rounded-md mx-4 space-x-4"
        >
          Delete account
        </button>

        <button onClick={logout} className=" bg-gray-300 p-2 rounded-md ">
          Cancel & Sign out
        </button>
      </div>
    </div>
  );
};

export default Home;
