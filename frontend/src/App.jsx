import { useState } from "react";

import "./App.css";
import LandingPage from "./LandingPage/LandingPage";
import Homepage from "./Homepage/Homepage";
import GroupChat from "./GroupChat/GroupChat";
import IndividualChat from "./IndividualChat/IndividualChat";
import AuthPage from "./AuthPages/AuthPage";

function App() {
  return (
    <>
      {/* <LandingPage/> */}
      {/* <Homepage /> */}
      {/* <GroupChat /> */}
      {/* <IndividualChat /> */}
      <AuthPage />
    </>
  );
}

export default App;
