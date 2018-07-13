import React, { Component } from "react";

import "./App.css";
import Friends from "./components/Friends";
import CreateFriendForm from "./components/CreateFriendForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Friends />
        <CreateFriendForm />
      </div>
    );
  }
}

export default App;
