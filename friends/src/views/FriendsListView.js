import React from "react";
import {fetchFriends, addNewFriend, deleteFriend} from "../actions";
import {connect} from "react-redux";
import ReactLoading from "react-loading";
import "../App.css";

import FriendsList from "../components/FriendsList";

class FriendsListView extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      email: ""
    };
  }

  componentDidMount = () => {
    this.props.fetchFriends();
  };

  changeHandler = e => {
    console.log(e.target.value);
    this.setState({[e.target.name]: e.target.value});
  };

  handleSubmit = (e, newFriend) => {
    e.preventDefault();
    console.log(newFriend);
    this.props.addNewFriend(newFriend);
    this.setState({name: "", age: "", email: ""});
  };

  deleteFriend = (e, id) => {
    e.preventDefault();
    console.log(id);
    this.props.deleteFriend(id);
  };

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e, this.state)}>
          <input
            required
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.changeHandler}
          />
          <input
            required
            type="number"
            name="age"
            placeholder="Age"
            value={this.state.age}
            onChange={this.changeHandler}
          />
          <input
            required
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.changeHandler}
          />
          <button>Add</button>
        </form>
        <div>
          {this.props.isFetching ? (
            <div>
              <h2>Fetching Friends</h2>
              <ReactLoading
                type="spokes"
                color="#000"
                className="loading"
                height="100px"
                width="100px"
                delay="0"
              />
            </div>
          ) : (
            <FriendsList
              friends={this.props.friends}
              deleteFriend={this.deleteFriend}
            />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    friends: state.friendsReducer.friends,
    isFetching: state.friendsReducer.isFetching
    // deleteFriend: state.friendsReducer
  };
};

export default connect(
  mapStateToProps,
  {
    fetchFriends,
    addNewFriend,
    deleteFriend
  }
)(FriendsListView);
