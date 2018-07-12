import React, { Component } from "react";

import "./App.css";
import Friends from "./components/Friends";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Friends />
      </div>
    );
  }
}

export default App;
