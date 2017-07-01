import React, { Component } from 'react';
import logo from './logo.svg';
import Menu from './componentes/Menu.js';
import './App.css';


class App extends Component {
  static JAVA_APP = "http://localhost:8080/random/";
  static NODE_APP = "http://localhost:9000/v1/";
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <Menu></Menu>
        </p>
      </div>
    );
  }
}

export default App;
