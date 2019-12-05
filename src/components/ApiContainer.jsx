import React, { Component } from 'react';
import ToolBar from './ToolBar.jsx';
import CanvasContainer from './CanvasContainer.jsx';

class ApiContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curTool: 'LINE',
      tools: ['ARROW', 'LINE', 'RECT'],
      curBorderColor: '#000000',
      curFillColor: 'rgba(0,0,0,0)',
      strokeWidth: '1'
    }
    this.toolBarHeight = 30;
    this.aFunc = this.aFunc.bind(this);
    this.changeBorderColor = this.changeBorderColor.bind(this);
    this.changeFillColor = this.changeFillColor.bind(this);
    this.changeStrokeWidth = this.changeStrokeWidth.bind(this);
  }

  aFunc(str) {
    this.setState({
      curTool: str,
    })
  }

  //Changes color used for line and rect strokes in Canvas
  //Called in ToolBar
  changeBorderColor(color) {
    this.setState({
      curBorderColor: color
    })
  }
  //same as above but changes fill color
  changeFillColor(color) {
    this.setState({
      curFillColor: color
    })
  }

  changeStrokeWidth(width) {
    this.setState({
      strokeWidth: width
    })
  }



  render() {

    return (
      <div className="apiCon">
        <ToolBar func={this.aFunc} tools={this.state.tools} tbh={this.toolBarHeight} changeBorderColor={this.changeBorderColor} changeFillColor={this.changeFillColor} changeStrokeWidth={this.changeStrokeWidth}/>
        <CanvasContainer curTool={this.state.curTool} tbh={this.toolBarHeight} curBorderColor={this.state.curBorderColor} curFillColor={this.state.curFillColor} strokeWidth={this.state.strokeWidth}/>
      </div>
    );
  }
}


export default ApiContainer;