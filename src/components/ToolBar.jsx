import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

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

    this.butts = [];
    this.createButts();
  }

  createButts() {
    this.props.tools.map(tool => {
      this.butts.push(( <Button 
        key={this.butts.length}
        style={this.styles}
        onClick={() => this.props.func(tool)}
        >{tool}</Button>));
    })
  }

  render() {

    return (
      <div style={this.styles}>
        {/* <h2 style={this.styles}>Hello ToolBar!</h2> */}
        {this.butts}
      </div>
    );
  }
}

