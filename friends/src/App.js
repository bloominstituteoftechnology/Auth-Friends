import React, { Component } from "react";
import "./App.css";
import Friends from "./components/Friends.js";
import Friend from './components/Friend.js'
import { Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Friends} />
        <Route path="/:id" component={Friend} />
      </div>
    );
  }
}

export default App;
