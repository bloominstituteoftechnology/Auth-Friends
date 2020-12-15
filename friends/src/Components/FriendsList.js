import React, { Component } from "react";
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export default class FriendsList extends Component {
  state = {
    friends: []
  };

  componentDidMount() {
    this.getFriends();
  }

  getFriends = () => {
    axiosWithAuth()
      .get("/friends")
      .then(res => {
        this.setState({ friends: res.data });
        console.log(this.state.friends, "FRIENDS");
      })
      .catch(err => {
        console.log(err);
      });
  };

  //   formatData = () => {
  //     const formattedData = [];

  //   };
  render() {
    // const friends2 = this.formatData();
    return (
      <div>
        {this.state.friends.map(homie => {
          return <p>{homie.name}</p>;
        })}
      </div>
    );
  }
}
