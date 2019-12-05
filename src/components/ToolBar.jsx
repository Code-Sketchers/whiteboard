import React, { Component } from "react";

export default class ToolBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-inner">
        <button>SELECT</button>
        <button>DRAW RECTANGLE</button>
        <button>DRAW LINE</button>
        {this.buttons}
      </div>
    );
  }
}
