import React, { Component } from "react";

export default class NavBar extends Component {
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

  render() {
    return (
      <div>
        {/* <h2>I AM THE NAV BAR</h2>
        <button>SIGN IN</button>
        <button>SIGN UP</button>
        {this.buttons} */}
        <ul>
          <li>
            <button onClick={this.logLogInClick}>Log In</button>
          </li>
          <li>
            <button onClick={this.logSignUpClick}>Sign Up</button>
          </li>
        </ul>
      </div>
    );
  }
}
