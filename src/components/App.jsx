import React, { Component } from "react";
import ToolBar from "./ToolBar.jsx";
import NavBar from "./NavBar.jsx";
import CanvasContainer from "./CanvasContainer.jsx";
import LoginContainer from "./LoginContainer.jsx";
import SignupContainer from "./SignupContainer.jsx";
import ApiContainer from "./ApiContainer.jsx";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App(props) {
  return (
    <div className="container-outer">
      <h1>I AM THE APP</h1>
      <NavBar />
      <br/>
      <ToolBar />
      <br/>
      <CanvasContainer />
    </div>
    // <LoginContainer />
    // <ApiContainer />
    // <Router>
    //   <Switch>
    //     <Route path="/signup">
    // <SignupContainer />
    //     </Route>
    //     {/* <Route path="/api">
    //       <ApiContainer />
    //     </Route> */}
    //     <Route path="/">
    //       <ApiContainer />
    //     </Route>
    //   </Switch>
    // </Router>
  );
}

export default App;
