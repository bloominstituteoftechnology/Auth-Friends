import React from "react";
import { connect } from "react-redux";
import { deleteFriend } from "../actions";

class Friends extends React.Component {
  render() {
    const { friends, deleteFriend } = this.props;
    return (
      <div className="friend-card">
        {friends.map(friend => (
          <div key={friend.id}>
            <h3>{friend.name}</h3>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
            <button onClick={() => deleteFriend(friend.id)}>
              Remove Friend
            </button>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { friendsReducer } = state;
  return {
    deleteFriend: friendsReducer.deleteFriend,
    error: friendsReducer.error
  };
};

export default connect(
  mapStateToProps,
  { deleteFriend }
)(Friends);
