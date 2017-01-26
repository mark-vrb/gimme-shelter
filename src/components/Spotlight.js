import React, { Component } from 'react';

export default class Spotlight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'initial'
    };
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  render() {
    return <div>
        <div>{this.state.before}</div>
        <input
          type="text"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <div>{this.state.input}</div>
        <div>{this.state.after}</div>
    </div>
  }
}
