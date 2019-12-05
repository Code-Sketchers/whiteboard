import React, { Component } from "react";
import ToolBar from "./ToolBar.jsx";
import NavBar from "./NavBar.jsx";
import Canvas from "./Canvas.jsx";
import ApiContainer from "./ApiContainer.jsx";

function App(props) {
  return (
    <div>
      <NavBar />
      <ApiContainer />
    </div>
  );
}

export default App;
