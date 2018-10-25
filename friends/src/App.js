import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import FriendsListView from "./views/FriendsListView";

class App extends Component {
  componentDidMount = () => {};

  render() {
    return (
      <div className="App">
        <FriendsListView friends={this.props.friends} />
      </div>
    );
  }
}

export default App;
