import React, { Component } from "react";
import FriendContainer from "./FriendContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>My Friends List:</h2>
        <FriendContainer />
      </div>
    );
  }
}
export default App;
