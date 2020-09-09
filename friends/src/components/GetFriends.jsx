import React from "react";
import AxiosWithAuth from "../utils/AxiosWithAuth";
import AddFriend from "./AddFriend";

class GetFriends extends React.Component {
      state = {
        friends: [],
      };
  

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    AxiosWithAuth()
      .get("/friends")
      .then((res) => this.setState({ ...this.state, friends: res.data }))
      .catch((err) => console.log("getData error:", err));
  };


  render() {
    return (
      <div className="friends-cont m-4">
        <div className="add-friends">
          <AddFriend />
        </div>
        <div className="friends-list-cont">
          <h3>Friend List</h3>
          <div className="friends-list m-1">
            {this.state.friends.map((friend) => (
              <div key={friend.id} className="friend">
                <p className="friends-name">{friend.name}</p>
                <p>Age: {friend.age}</p>
                <p>Email: {friend.email}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default GetFriends;
