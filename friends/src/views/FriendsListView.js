import React from "react";
import {fetchFriends, addNewFriend} from "../actions";
import {connect} from "react-redux";

import FriendsList from "../components/FriendsList";

class FriendsListView extends React.Component {
  constructor() {
    super();
    this.state = {
      newFriend: ""
    };
  }

  changeHandler = e => {
    console.log(e.target.value);
    this.setState({[e.target.name]: e.target.value});
  };

  componentDidMount = () => {
    this.props.fetchFriends();
  };

  render() {
    return (
      <div>
        <form action="">
          <input
            type="text"
            name="newFriend"
            placeholder="Add New Friend"
            value={this.state.newFriend}
            onChange={this.changeHandler}
          />
          <button>Add</button>
        </form>
        <div>
          {this.props.isFetching ? (
            <h2>Fetching Friends</h2>
          ) : (
            <FriendsList friends={this.props.friends} />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    isFetching: state.isFetching
  };
};

export default connect(
  mapStateToProps,
  {fetchFriends, addNewFriend}
)(FriendsListView);
