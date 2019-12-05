import React, { Component } from 'react';
import { Stage, Group, Layer, Rect, Line } from 'react-konva';


export default class CanvasContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mStart: { x: 0, y: 0 },
      arr: [],
    }
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
  }
  

  handleMouseUp(e) {
    // console.log(this.props)
    //switch for props.curTool
    // if (this.props.curTool !== 'ARROW') {
      switch (this.props.curTool) {
        case 'RECT':
          this.setState({
            arr: [...this.state.arr, (<Rect
              key={'Rect' + this.state.arr.length}
              x={this.state.mStart.x}
              y={this.state.mStart.y}
              width={Math.abs(e.evt.clientX - this.state.mStart.x)}
              height={Math.abs(e.evt.clientY - this.state.mStart.y - this.props.tbh)}
              stroke={this.props.curBorderColor}
              strokeWidth={parseInt(this.props.strokeWidth)}
              fill={this.props.curFillColor}
              draggable
            />)]
          });
          break;
        case 'LINE':
          this.setState({
            arr: [...this.state.arr, (<Line
              key={'Line' + this.state.arr.length}
              points={[this.state.mStart.x, this.state.mStart.y, e.evt.clientX, e.evt.clientY - this.props.tbh]}
              stroke={this.props.curBorderColor}
              strokeWidth={parseInt(this.props.strokeWidth)}
              hitStrokeWidth={parseInt(this.props.strokeWidth) + 10}
              draggable
            />)]
          });
          break;
        default:
          break;
      }
    // }
  };

  // on mouseDown, capture current mouse coordinates in state
  // also ensures that user cannot drag and draw at the same time
  handleMouseDown(e) {
    console.log(e)
    if (this.props.curTool !== 'ARROW') {
      e.target.stopDrag();
    }
    this.setState({
      mStart: { x: e.evt.clientX, y: e.evt.clientY - this.props.tbh }
    })
  };
  // Todo: reduce the innerwidth to allow space for the toolbar;
  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight} onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp}>
        <Layer>
          {this.state.arr}
        </Layer>
      </Stage>
    );
  }
}