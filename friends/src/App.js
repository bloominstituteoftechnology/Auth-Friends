import React, { Component } from "react";
import "./App.css";

import CreateFriendForm from "./components/CreateFriendForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>What's App?</h1>
        <CreateFriendForm />
      </div>
    );
  }
}

export default App;
