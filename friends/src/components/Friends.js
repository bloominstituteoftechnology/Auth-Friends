import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchFriends, deleteFriend } from "../actions/index";

class Friends extends Component {

  componentDidMount() {
    this.props.fetchFriends();
  }

  removeFriend = id => {
    this.props.deleteFriend( id );
    setTimeout(() => {
            this.props.fetchFriends();
        }, 2000);
  };

  render() {
    return (
      <div>
        {this.props.fetching ? (
          <p>Loading...</p>
        ) : (
          <ul className="friend-grid">
            {this.props.friends.map(friend => {
              return (
                <li className="friend" key={friend.id}>
                  <div className="friend-name">{friend.name}</div>
                  <div className="friend-age">{friend.age}</div>
                  <div className="friend-email">{friend.email}</div>
                  <div>
                    <button onClick={() => this.removeFriend(friend.id)}>
                      Delete
                    </button>
                  </div>
                </li>
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
    friends: state.friends,
    fetching: state.fetching,
    error: state.errorMessage
  };
};

export default connect(mapStateToProps, { fetchFriends, deleteFriend })(Friends);
