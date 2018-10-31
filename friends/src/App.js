import React, { Component } from "react";
import { FriendListView } from "./views";
import FriendForm from './components/FriendForm'
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friend: ''
    }
  }
  render() {
    return (
      <div>
        <h1>Kat's Friends</h1>
        <FriendListView />
        <FriendForm />
      </div>
    )
  }
}

export default App;
