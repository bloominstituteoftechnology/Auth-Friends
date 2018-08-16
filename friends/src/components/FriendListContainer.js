import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFriends, addNewFriend } from "../actions";
import FriendList from "./FriendList";
import AddFriendForm from "./AddFriendForm";

class FriendListContainer extends Component {
constructor() {
    super();
    this.state = {
        name: "",
        age: "",
        email: ""
    };
}

  componentDidMount() {
    this.props.fetchFriends();
  }

  inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addNewFriend = e => {
    e.preventDefault();
    this.props.addNewFriend(this.state.name, this.state.age, this.state.email);
    this.setState({
        name: "",
        age: "",
        email: ""
    });
  };

  render() {
    return (
      <div>
        {this.props.fetching ? (
          <h1>Loading...</h1>
        ) : (
            <div>
            <FriendList
            friends={this.props.friends}
            />
            <AddFriendForm
            name={this.state.name}
            age={this.state.age}
            email={this.state.email}
            handleChange={this.inputHandler}
            addNewFriend={this.addNewFriend}
          />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friendsReducer.friends,
    fetching: state.friendsReducer.fetchingFriends
  }
}

export default connect(mapStateToProps, {
    fetchFriends,
    addNewFriend
})(FriendListContainer);