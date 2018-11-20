import React, { Component } from "react";

import { FriendListView } from "./views";
import "./styles/App.css";

class App extends Component {

  render() {
    return <FriendListView store={this.props.store}/>;
  }
}

export default App;