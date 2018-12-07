import React, { Component } from "react";

import FriendsListView from "./views/FriendsListView";
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
