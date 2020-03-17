import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class FriendsList extends React.Component {
  state = {
    friends: []
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
          friends: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const getFriendsList = this.getFriendsData();
    console.log();
    return (
      <div>
        {this.state.friends.map(friend => (
          <div>
            <h1>{friend.name}</h1>
            <h2>{friend.age}</h2>
            <h3>{friend.email}</h3>
          </div>
        ))}
      </div>
    );
  }
}

export default FriendsList;
