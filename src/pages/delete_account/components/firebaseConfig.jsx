
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_TOKEN,
    authDomain: "teaml.netlify.app/",
    projectId: "debt-record",
    storageBucket: "debt-record.appspot.com",
    messagingSenderId: process.env.REACT_APP_FIREBASE_MASSEING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  };

  

  export default firebaseConfig;