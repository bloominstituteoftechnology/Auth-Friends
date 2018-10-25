import React, { Component } from "react";

import { FriendList, AddFriend } from "./component";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div class="container">
     <AddFriend />
    <FriendList />
  
    </div>
    )
  }
}

export default App;
