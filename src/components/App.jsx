import React, { Component } from "react";
import NavBar from "./NavBar.jsx";
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
