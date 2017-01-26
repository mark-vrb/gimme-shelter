import React, { Component } from 'react';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'initial'};
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  render() {
    return <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <h1>{this.props.name}</h1>
        <h2>Proudly brought by {this.props.author}</h2>
        <h6>{this.state.value}</h6>
        <div>{this.props.children}</div>
    </div>
  }
}
