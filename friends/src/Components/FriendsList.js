import React, { Component } from "react";
import axios from "axios";

export default class FriendsList extends Component {
  state = {
    friends: []
  };

  componentDidMount() {
    this.getFriends();
  }

  getFriends = () => {
    axios
      .get("http://localhost:5000/api/friends")
      .then(res => {
        this.setState({ friends: res.data.data });
        console.log(this.state.friends);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        {/* {friends.map(homie => {
          return <p>{homie.name}</p>;
        })} */}
      </div>
    );
  }
}
