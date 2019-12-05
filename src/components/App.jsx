import React, { Component } from "react";
import NavBarContainer from "./NavBarContainer.jsx";
import ApiContainer from "./ApiContainer.jsx";

function App(props) {
  return (
    <div>
      <NavBarContainer />
      <ApiContainer />
    </div>
  );
}

export default App;
