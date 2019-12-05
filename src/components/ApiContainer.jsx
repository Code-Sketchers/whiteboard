import React, { Component } from 'react';
import ToolBar from './ToolBar.jsx';
import CanvasContainer from './CanvasContainer.jsx';


class ApiContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curTool: 'ARROW',
      tools: ['ARROW', 'LINE', 'RECT'],
    }
    this.toolBarHeight = 30;
    this.aFunc = this.aFunc.bind(this);
  }

  aFunc(str) {
    this.setState({
      curTool: str,
    })
  }

  render() {

    return (
      <div className="apiCon">
        <ToolBar func={this.aFunc} tools={this.state.tools} tbh={this.toolBarHeight}/>
        <CanvasContainer curTool={this.state.curTool} tbh={this.toolBarHeight}/>
      </div>
    );
  }
}


export default ApiContainer;