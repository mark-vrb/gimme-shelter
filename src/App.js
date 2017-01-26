import React, { Component } from 'react';
import Card from './components/Card';

import './App.styl';

export default class App extends Component {
  render() {
    return <Card author="Batman" name="Gotham has only one legend">Hi</Card>
  }
}
