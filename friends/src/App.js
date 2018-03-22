import React, { Component } from "react";
import CreateFriendForm from "./components/CreateFriendForm";
import Friends from "./components/Friends";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Friends friends={this.friends} />
        <CreateFriendForm />
        {/* <UpdateFriendForm /> */}
      </div>
    );
  }
}

export default App;
