import React, { Component } from 'react';
import ToolBar from './ToolBar';
import CanvasContainer from './CanvasContainer';
import Canvas from './Canvas.js';
import { setConstantValue } from 'typescript';



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
        {/* <Canvas /> */}
        <CanvasContainer curTool={this.state.curTool} tbh={this.toolBarHeight}/>
      </div>
    );
  }
}


export default ApiContainer;