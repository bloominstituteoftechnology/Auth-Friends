import React, { Component } from 'react';
import logo from './D2rdroid1.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Let's go David!  Start by editing <code>src/App.js</code> and make this happen.
          </p>
          <a
            className="App-link"
            href="http://linkedin.com/in/gddaniel"
            target="_blank"
            rel="noopener noreferrer"
          >
            About David
          </a>
        </header>
      </div>
    );
  }
}

export default App;
