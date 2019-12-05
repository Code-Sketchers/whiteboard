import React, { Component } from "react";

export default class ToolBar extends Component {
  constructor(props) {
    super(props);

    this.styles = {
      height: `${this.props.tbh}px`,
      width: "180px",
      margin: 0,
      padding: 0,
      display: "flex"
    };

    this.buttons = [];
    // this.createbuttons();
  }
  // Todo: See a way to do without react-bootstrap;
  // createbuttons() {
  //   this.props.tools.map(tool => {
  //     this.buttons.push(( <Button
  //       key={this.buttons.length}
  //       style={this.styles}
  //       onClick={() => this.props.func(tool)}
  //       >{tool}</Button>));
  //   })
  // }

  render() {
    return (
      <div style={this.styles}>
        <h2>I AM THE TOOL BAR</h2>
        <button>SELECT</button>
        <button>RECTANGLE</button>
        <button>LINE</button>
        {this.buttons}
      </div>
    );
  }
}
