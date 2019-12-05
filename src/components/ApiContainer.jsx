import React, { Component } from 'react';
import ToolBar from './ToolBar.jsx';
import CanvasContainer from './Canvas.jsx';


class ApiContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curTool: 'LINE',
      tools: ['ARROW', 'LINE', 'RECT'],
    }
    this.toolBarHeight = 30;
    this.changeTool = this.changeTool.bind(this);
  }

  changeTool(str) {
    this.setState({
      curTool: str,
    })
  }

  render() {

    return (
      <div className="apiCon">
        <ToolBar func={this.changeTool} tools={this.state.tools} tbh={this.toolBarHeight}/>
        <CanvasContainer curTool={this.state.curTool} tbh={this.toolBarHeight}/>
      </div>
    );
  }
}


export default ApiContainer;