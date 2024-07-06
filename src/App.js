import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { DebtRecordApp, Home, PrivacyPolicy,TermsOfService, DeleteAccount } from "./pages";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === "") {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]); // do this on route change

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}>
      {
        <div className="App bg-white text-center ">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/DebtRecord" element={<DebtRecordApp />} />
            <Route path="/DeleteAccount" element={<DeleteAccount />} />
            <Route path="/PrivacyPolicy/" element={<PrivacyPolicy />} />
            <Route path="/TermsOfService/" element={<TermsOfService/>} />
          </Routes>
        </div>
      }
    </GoogleOAuthProvider>
  );
}

export default App;
