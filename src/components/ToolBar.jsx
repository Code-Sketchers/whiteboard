import React, { Component } from 'react';

export default class ToolBar extends Component {
  constructor(props) {
    super(props)

    this.styles = {
      height: `${this.props.tbh}px`,
      width: '180px',
      margin: 0,
      padding: 0,
      display: 'flex',
    }

    this.btns = [];
    this.createBtns();
  }

  createBtns() {
    this.props.tools.map(tool => {
      this.btns.push(( <button 
        key={this.btns.length}
        onClick={() => this.props.func(tool)}
        >{tool}</button>));
    })
  }

  render() {

    return (
      <div style={this.styles}>
        {this.btns}
      </div>
    );
  }
}

