import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFriends, addFriend, deleteFriend } from "../actions";
import FriendList from "./FriendList";
import NewFriendForm from "./NewFriendForm";
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
   inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
   addFriend = (event) => {
    event.preventDefault();
    this.props.addFriend(this.state.name, this.state.age, this.state.email);
    this.setState({
        name: "",
        age: "",
        email: ""
    });
  };
   deleteFriend = (id) => {
    this.props.deleteFriend(id);
  };
   render() {
    return (
      <div>
        {this.props.fetching ? (
          <h1>Where's the Party At?</h1>
        ) : (
            <div>
            <FriendList
            friends={this.props.friends}
            delete={this.deleteFriend}
            />
            <NewFriendForm
            name={this.state.name}
            age={this.state.age}
            email={this.state.email}
            handleChange={this.inputHandler}
            addFriend={this.addFriend}
          />
          </div>
        )}
      </div>
    );
  }
}
 const mapStateToProps = state => {
  return {
    friends: state.friendReducer.friends,
    fetching: state.friendReducer.fetchingFriends
  }
}
 export default connect(mapStateToProps, {
    fetchFriends,
    addFriend,
    deleteFriend
})(FriendListContainer);