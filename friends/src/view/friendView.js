import React from "react";
import { connect } from "react-redux";

import { Friends } from "../components";
import { fetchFriends, addFriends } from "../actions";
import { throws } from "assert";

class FriendView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newFriend: {
        name: "",
        age: "",
        email: ""
      }
    };
  }
  componentDidMount() {
    this.props.fetchFriends();
  }
  handleChanges=(event)=>{
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [event.target.name]: event.target.value
      }
    });
  }
  addFriend=(event)=>{
    this.props.addFriends(this.state.newFriend)
  }
  render() {
    if (this.props.fetchingFriends) {
      return <h1>Fetching some starwar name from wherever</h1>;
    }
    return (
      <div className="CharactersList_wrapper">
        <Friends
          friends={this.props.friends}
          newFriend={this.state.newFriend}
          handleChanges={this.handleChanges}
          addFriend={this.addFriend}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetchingFriends: state.friendReducer.fetchingFriends,
    friendsFetched: state.friendReducer.friendsFetched,
    friendsSaved: state.friendReducer.friendsSaved,
    savingFriends: state.friendReducer.savingFriends,
    updatingFriend: state.friendReducer.updatingFriend,
    friendUpdated: state.friendReducer.friendUpdated,
    deletingFriend: state.friendReducer.deletingFriend,
    friendDeleted: state.friendReducer.friendDeleted,
    friends: state.friendReducer.friends,
    error: state.friendReducer.error
  };
};
export default connect(
  mapStateToProps,
  { fetchFriends, addFriends }
)(FriendView);
