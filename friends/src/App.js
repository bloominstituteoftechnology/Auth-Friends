import React, { Component } from "react";
import { FriendsListView } from "./views";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FriendsListView />
      </div>
    );
  }
}

export default App;
