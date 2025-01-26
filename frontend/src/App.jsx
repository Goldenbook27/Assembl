import { useState } from "react";

import "./App.css";
import LandingPage from "./LandingPage/LandingPage";
import Homepage from "./Homepage/Homepage";
import GroupChat from "./GroupChat/GroupChat";
import IndividualChat from "./IndividualChat/IndividualChat";
import AuthPage from "./AuthPages/AuthPage";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const auth = useSelector((state) => state.auth);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={auth.user ? <Homepage /> : <LandingPage />} />
        <Route
          path="/auth"
          element={auth.user ? <Navigate to="/" /> : <AuthPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
