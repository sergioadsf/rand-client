import React, { Component } from 'react';
import MainMenu from './component/MainMenu.js';
import './App.css';


class App extends Component {
  static JAVA_APP = "http://localhost:8080/random/";
  static NODE_APP = "http://localhost:9000/v1/";
  
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <MainMenu></MainMenu>
        </p>
      </div>
    );
  }
}

export default App;
