import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

class Friends extends React.Component {
  state = {
    friends: [],
  };

  componentDidMount() {
    this.fetchFriends();
  }

  fetchFriends = () => {
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => {
        this.setState({
          friends: res.data,
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <h1>Friends List</h1>
        {this.state.friends.map((friend) => (
          <>
            <div key={friend.id}>
              <h4>{friend.name}</h4>
              <h4>{friend.age}</h4>
              <p>{friend.email}</p>
            </div>
          </>
        ))}
      </div>
    );
  }
}

export default Friends;
