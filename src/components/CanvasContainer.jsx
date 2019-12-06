import React, { Component } from 'react';
import { Stage, Group, Layer, Rect, Line, Text } from 'react-konva';
// this is where we story our history
let history = [];
// counter for where we are in history
let historyStep = 0;
export default class CanvasContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: { 
        x: 0, 
        y: 0 
      },
      arr: []
    }
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleUndo = this.handleUndo.bind(this);
    this.handleRedo = this.handleRedo.bind(this);
  }

  handleUndo() {
    if (history.length === 0) {
      return;
    }
    historyStep -= 1;

    const previous = history[historyStep];
    console.log('arr ',this.state.arr, 'pre ', previous)
    this.setState({
      arr: [previous]
    });
    console.log('arr2 ',this.state.arr)
  };

  handleRedo() {
    if (historyStep === history.length - 1) {
      return;
    }
    historyStep += 1;
    const next = history[historyStep];
    this.setState({
      arr: [next]
    });
  };

  handleMouseUp(e) {
    console.log(e)
    //switch for props.curTool
    if (this.props.curTool !== 'ARROW') {
      switch (this.props.curTool) {
        case 'RECT':
          console.log('rect clicked')
          
          const posRect = (<Group draggable><Rect
            key={this.state.arr.length}
            x={this.state.position.x}
            y={this.state.position.y}
            width={Math.abs(e.evt.clientX - this.state.position.x)}
            height={Math.abs(e.evt.clientY - this.state.position.y - this.props.tbh)}
            stroke='black'
            draggable
          /></Group>)
          history = history.concat([posRect]);
          historyStep += 1;
          this.setState({
            arr: [...this.state.arr, posRect]
          });
          break;
        case 'LINE':
          console.log('link clicked')
          
          const posLine = (<Line
              key={this.state.arr.length}
              points={[this.state.position.x, this.state.position.y, e.evt.clientX, e.evt.clientY - this.props.tbh]}
              stroke='black'
            />)

          // history = history.concat([posLine]);
          this.setState({
            arr: [...this.state.arr, posLine ]
          });
          history.push(this.state.arr);
          // pointer to current position
          historyStep += 1;
          console.log('line draw', this.state.arr, 'history ', history)
          break;
        
        default:
          break;
      }
    }
  };

  handleMouseDown(e) {
    if (this.props.curTool !== 'ARROW') {
      e.target.stopDrag();
    }
    this.setState({
      position: { x: e.evt.clientX, y: e.evt.clientY - this.props.tbh }
    })
  };
  // Todo: reduce the innerwidth to allow space for the toolbar;
  render() {
    return (
      <div>
      <Stage width={window.innerWidth} height={window.innerHeight} onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp}>
        <Layer>
          {this.state.arr}
        </Layer>
      </Stage>
      
      <button id='undo_button' onClick={()=>{this.handleUndo()}}>Undo</button>
      <button id='redo_button' onClick={()=>{this.handleRedo()}}>Redo</button>
      </div>
    );
  }
}