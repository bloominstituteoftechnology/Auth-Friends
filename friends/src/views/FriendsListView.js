import React from "react";
import { connect } from "react-redux";
import { fetchData, addFriend, deleteFriend } from "../action";
import Friend from "../components/Friend";

class FriendsListView extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      email: ""
    };
  }
  componentDidMount() {
    // console.log("cdm call");
    this.props.fetchData();
  }
  clickHandle = id => {
    // console.log("clicked!");

    this.props.deleteFriend(id);
  };
  changeHandle = e => {
    // console.log("input");
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  submitHandle = e => {
    e.preventDefault();
    this.props.addFriend(this.state);
  };
  render() {
    // console.log("rendering", this.props);
    return (
      <>
        <form onSubmit={this.submitHandle}>
          <input
            type="text"
            placeholder="name"
            name="name"
            value={this.state.name}
            onChange={this.changeHandle}
          />
          <input
            type="text"
            placeholder="age"
            name="age"
            value={this.state.age}
            onChange={this.changeHandle}
          />
          <input
            type="text"
            placeholder="email"
            name="email"
            value={this.state.email}
            onChange={this.changeHandle}
          />
          <button type="submit">Add a friend</button>
        </form>

        {this.props.fetchingFriends ? (
          <h2>loading your friends, hold on my dude!</h2>
        ) : null}
        {this.props.friends.map(friend => (
          <Friend
            key={friend.id}
            friend={friend}
            clickHandle={this.clickHandle}
          />
        ))}
      </>
    );
  }
}
const mapStateToProps = state =>
  console.log("STP", state),
  ({
    friends: state.friends,
    fetchingFriends: state.fetchingFriends,
    friendsFetched: state.friendsFetched,
    friendsSaved: state.friendsSaved,
    savingFriends: state.savingFriends,
    updatingFriend: state.updatingFriend,
    friendUpdated: state.friendUpdated,
    deletingFriend: state.deletingFriend,
    friendDeleted: state.friendDeleted
  });

export default connect(
  mapStateToProps,
  {
    fetchData,
    addFriend,
    deleteFriend
  }
)(FriendsListView);
