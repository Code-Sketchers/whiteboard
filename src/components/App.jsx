import React, { Component } from "react";
import ToolBar from "./ToolBar.jsx";
import NavBar from "./NavBar.jsx";
import Canvas from "./Canvas.jsx";
import LoginPopup from "./LoginPopup.jsx";
import SignupPopup from "./SignupPopup.jsx";

function App(props) {
  return (
    <div>
      <h1>I AM THE APP</h1>
      <NavBar />
      <ToolBar />
      <Canvas />
    </div>
  );
}

export default App;
