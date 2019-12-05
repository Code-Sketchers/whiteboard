import React, { Component } from "react";
import ToolBar from "./ToolBar.jsx";
import Canvas from "./Canvas.jsx";

class ApiContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curTool: "LINE",
      tools: ["ARROW", "LINE", "RECT"]
    };
    this.toolBarHeight = 30;
    this.changeTool = this.changeTool.bind(this);
  }

  changeTool(str) {
    this.setState({
      curTool: str
    });
  }

  render() {
    return (
      <div className="container-outer">
        <ToolBar
          func={this.changeTool}
          tools={this.state.tools}
          tbh={this.toolBarHeight}
        />
        <Canvas curTool={this.state.curTool} tbh={this.toolBarHeight} />
      </div>
    );
  }
}

export default ApiContainer;
