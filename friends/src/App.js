import React, { Component } from "react";

import FriendListComponent from "./components/FriendListComponent";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FriendListComponent />
      </div>
    );
  }
}

export default App;
