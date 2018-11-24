import React, { Component } from "react";
import Friends from "./components/Friends";
import { connect } from "react-redux";
import { fetchFriends, saveFriend } from "../src/actions";
import CreateFriendForm from "./components/CreateFriendForm";

class App extends Component {
  state = {
    name: "",
    age: "",
    email: ""
  };

  componentDidMount() {
    this.props.fetchFriends();
  }

  inputHandler = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  addNewFriend = e => {
    e.preventDefault();
    this.props.saveFriend(this.state);
  };

  render() {
    return (
      <div>
        <Friends />
        <CreateFriendForm
          addNewFriend={this.addNewFriend}
          inputHandler={this.inputHandler}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetchingFriends: state.fetchingFriends,
    friends: state.friends,
    error: state.errorMessage
  };
};

export default connect(
  mapStateToProps,
  { fetchFriends, saveFriend }
)(App);

// export default App;
