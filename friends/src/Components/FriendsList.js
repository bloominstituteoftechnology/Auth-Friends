import React, { Component } from "react";
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Friend from "./Friend";

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
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        {this.state.friends.map(homie => {
          return <Friend homie={homie} />;
        })}
      </div>
    );
  }
}
