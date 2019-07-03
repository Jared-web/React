import React, { Component } from 'react';
import logo from './img/data.svg';
import './App.css';
import Testing from './img/Testing.png';
import Production from './img/Production.png';
import ServerOnline from './img/legend-icons/green-dot.png';
import ServerDown from './img/legend-icons/red-dot.png';
import ServerOther from './img/legend-icons/black-dot.png';
import serverlist from './servers/server_list';

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
    <div> <img src={ServerOnline} alt="" className="ServerOnline" /> Online </div>
    <br></br>
    <div> <img src={ServerDown} alt="" className="ServerDown" /> Down </div>
    <br></br>
    <div> <img src={ServerOther} alt="" className="ServerOther" /> Other </div>
    <br></br>
  </div>

  <div className="Prod-style">
    <h2 className="h2"> Production </h2>
    <div className="display-production-server">
      <div className="row">

        <div className="Server-Block" onClick={(e) => {this.onClick()} }>
        <img className="server-img" src={Production} alt="Not found."/> Prod 1 </div>
        <div className="Server-Block" onClick={(e) => {this.onClick()} }>
        <img className="server-img" src={Production} alt="Not found."/> Prod 2 </div>
        <div className="Server-Block" onClick={(e) => {this.onClick()} }>
        <img className="server-img" src={Production} alt="Not found."/> Prod 3 </div>

      </div>
    </div>
  </div>

<br></br>

  <div className="Testing-style">
    <h2 className="h2"> Testing </h2>
    <div className="display-testing-server">
      <div className="row">

        <div className="Server-Block" onClick={(e) => {this.onClick()} }>
        <img className="server-img" src={Testing} alt="Not found."/> Test 1 </div>
        <div className="Server-Block" onClick={(e) => {this.onClick()} }>
        <img className="server-img" src={Testing} alt="Not found."/> Test 2 </div>
        <div className="Server-Block" onClick={(e) => {this.onClick()} }>
        <img className="server-img" src={Testing} alt="Not found."/> Test 3 </div>

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
