import React, { Component } from "react";
// import LoginContainer from "./LoginContainer.jsx";
import LoginContainer from "./LoginContainer_temp.jsx";
import SignupContainer from "./SignupContainer.jsx";
import NavBar from "./NavBar";

export default class NavBarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { thingToDisplay: "navbar" };
    this.logLogInClick = this.logLogInClick.bind(this);
    this.logSignUpClick = this.logSignUpClick.bind(this);
  }

  logLogInClick() {
    this.setState({ thingToDisplay: "login" });
    console.log("Log In Button Clicked....", this.state);
  }

  logSignUpClick() {
    this.setState({ thingToDisplay: "signup" });
    console.log("Sign Up Button Clicked....", this.state);
  }

  closeSignUpContainer() {
    console.log("Close Button Clicked....", this.state);
    this.setState({
      thingToDisplay: "navbar"
    });
  }

  render() {
    let showSignupContainer = false;

    return (
      <div>
        <NavBar
          logLogInClick={this.logLogInClick}
          logSignUpClick={this.logSignUpClick}
        />
        <LoginContainer />
        {this.state.thingToDisplay === "signup" ? (
          <SignupContainer
            closeSignUpContainer={this.closeSignUpContainer.bind(this)}
          />
        ) : null}
      </div>
    );
  }
}
