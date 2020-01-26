import React from "react";
import { axiosWithAuth } from "./axiosWithAuth";

class FriendsList extends React.Component {
  state = {
    friendsList: []
  };

  componentDidMount() {
    this.getFriendsData();
  }

  getFriendsData = () => {
    axiosWithAuth()
      .get("/api/friends")
      .then(res => {
        // console.log(res.data);
        this.setState({
          friendsList: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const getFriendsList = this.getFriendsData();

    return (
      <div>
        {this.state.friendsList.map((friend, key) => {
          return (
            <div>
              <h1>{friend.name}</h1>
              <p>{friend.id}</p>
              <p>{friend.age}</p>
              <p>{friend.email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default FriendsList;
