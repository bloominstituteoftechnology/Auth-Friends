import React, {Component} from "react";
import "./App.css";
import FriendsListView from "./views/FriendsListView";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FriendsListView friends={this.props.friends} />
      </div>
    );
  }
}

export default App;
