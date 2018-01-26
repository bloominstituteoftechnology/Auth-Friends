import React, { Component } from "react";
import { connect } from "react-redux";
import { getFriends, deleteFriend } from "../actions";

class Friends extends Component {
  componentDidMount() {
    this.props.getFriends();
  }
  showForm = () => {};
  render() {
    return (
      <div className="Friends">
        {this.props.fetchingFriends ? (
          <h2>..</h2>
        ) : (
          <ul className="Friends-grid">
            {this.props.friends.map((friend, index) => {
              return (
                <div key={index}>
                  <li className="Friend">
                    <div className="Friend-name">{friend.name}</div>
                    <div classname="Friend-age">{`Age: ${friend.age}`}</div>
                    <div className="Friend-email">{`Email: ${
                      friend.email
                    }`}</div>
                  </li>
                  <button onClick={() => this.props.deleteFriend(index)}>
                    Delete
                  </button>
                  <button onClick={this.showForm}>Update</button>
                </div>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friendsReducer.friends,
    featchingFriends: state.friendsReducer.fetchingFriends,
    error: state.friendsReducer.error,
    deletingFriends: state.friendsReducer.deletingFriends
  };
};

export default connect(mapStateToProps, { getFriends, deleteFriend })(Friends);
