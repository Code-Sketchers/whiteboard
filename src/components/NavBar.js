import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <button onClick={this.props.logLogInClick}>Log In</button>
          </li>
          <li>
            <button onClick={this.props.logSignUpClick}>Sign Up</button>
          </li>
        </ul>
      </div>
    );
  }
}
