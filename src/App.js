import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { DebtRecordApp, Home, PrivacyPolicy } from "./pages";

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
    <div className="App bg-white text-center ">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/DebtRecord" element={<DebtRecordApp />} />
        <Route path="/PrivacyPolicy/" element={<PrivacyPolicy />} />
      </Routes>
    </div>
  );
}

export default App;
