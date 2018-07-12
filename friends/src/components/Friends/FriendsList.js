import React from "react";
import Friend from "./Friend";
import { fetchFriends } from "../../actions";
import { connect } from "react-redux";
class FriendsList extends React.Component {
  componentDidMount() {
    const URL = "http://localhost:5000/api/friends";
    this.props.fetchFriends(URL);
  }
  render() {
    return (
      <div>
        {this.props.fetching ? (
          <h2>Friends data is loading...</h2>
        ) : (
          <ul>
            {this.props.friends.map(friend => {
              return (
                <Friend
                  key={friend.id}
                  name={friend.name}
                  age={friend.age}
                  email={friend.email}
                />
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    friends: state.friends,
    fetching: state.fetchingFriends
  };
};
export default connect(
  mapStateToProps,
  { fetchFriends }
)(FriendsList);
