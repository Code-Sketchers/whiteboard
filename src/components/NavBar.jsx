import React, { Component } from "react";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={this.styles}>
        <h2>I AM THE NAV BAR</h2>
        <button>SIGN IN</button>
        <button>SIGN UP</button>
        {this.buttons}
      </div>
    );
  }
}
