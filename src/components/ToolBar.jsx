import React, { Component } from 'react';

export default class ToolBar extends Component {
  constructor(props) {
    super(props)

    this.styles = {
      height: `${this.props.tbh}px`,
      margin: 0,
      padding: 0,
      display: 'flex',
    }

    this.btns = [];
    this.createBtns();
  }

  // loops through array of tools passed from props and adds them to this.btns
  // this.btns will display a button for each tool at render
  createBtns() {
    this.props.tools.map(tool => {
      this.btns.push(( <button
        //creates a key = name of tool
        key={String(tool)}
        onClick={() => this.props.func(tool)}
        >{tool}</button>));
    })
  }

  render() {

    return (
      <div style={this.styles}>
        {this.btns}
        <label htmlFor="borderColor">Border</label>
        <input type="color" name="borderColor" onInput={(e) => this.props.changeBorderColor(e.target.value)}/>
        <label htmlFor="fillColor">Fill</label>
        <input type="color" name="fillColor" defaultValue="#ffffff" onInput={(e) => this.props.changeFillColor(e.target.value)}/>
        <label htmlFor="fillColor">Stroke Width</label>
        <input type="number" min="1" max="100" onChange={(e) => {this.props.changeStrokeWidth(e.target.value)}}/>
      </div>
    );
  }
}

