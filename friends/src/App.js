import React, { Component } from "react";
import "./App.css";
import FriendList from "./components/FriendList";
import Form from "./components/Form";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FriendList />
        <Form />
      </div>
    );
  }
}

export default App;
