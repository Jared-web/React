import React, { Component } from 'react';
import logo from './data.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Endpoint Monitoring</h2>
        </div>
        <p className="Key">
          Key: Green=Up, Red=Down, Grey=Possible Fault
        </p>
      </div>
    );
  }
}

export default App;
