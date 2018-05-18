import React, { Component } from "react";
import { connect } from "react-redux";
import CreateFriendForm from "./components/CreateFriendForm";
import { fethcing_friend, deleteFriend, editFriend } from "./actions";
import EditFriendForm from "./components/EditFriendForm";

class App extends Component {
  componentDidMount = () => {
    this.props.fethcing_friend();
  };
  render() {
    const { Fetching, Editing, friends, deteleFriend } = this.props;
    return (
      <div>
        <CreateFriendForm />
        {!Fetching &&
          friends.map(friend => {
            return friend.Editing ? (
              <EditFriendForm key={friend.id} />
            ) : (
                <div key={friend.id}>
                  <div>{friend.name}</div>
                  <div>{friend.age}</div>
                  <div>{friend.email}</div>
                  <button onClick={() => this.props.deleteFriend(friend.id)}>
                    Delete
                </button>
                  <button
                    onClick={() => this.props.editFriend(friend.id, friends)}
                  >
                    Edit
                </button>
                </div>
              );
          })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { friendsReducer } = state;
  return friendsReducer;
};

export default connect(mapStateToProps, {
  fethcing_friend,
  deleteFriend,
  editFriend
})(App);