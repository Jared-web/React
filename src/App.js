import React, { Component } from 'react';
import logo from './img/data.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Endpoint Monitoring</h2>
      </div>

  <div className="Key">
    <br></br>
    <div>Green = Up </div>
    <br></br>
    <div>Red = Failed </div>
    <br></br>
    <div> Grey = Down</div>
    <br></br>
  </div>

  <div className="Prod-style">
    <h2 className="h2">  Production </h2>
    <div className="display-production-server">
      <div className="row">

        <div className="Server-Block" onClick={(e) => {this.onClick()} }> Prod1 </div>
        <div className="Server-Block" onClick={(e) => {this.onClick()} }> Prod2 </div>
        <div className="Server-Block" onClick={(e) => {this.onClick()} }> Prod3 </div>

      </div>
    </div>
  </div>

</div>


      );

}
onClick() {
 console.log("clicked")
}
}

export default App;
