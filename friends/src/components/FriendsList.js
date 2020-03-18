import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

// Friends Data: [id, name, age, email]

class FriendsList extends React.Component {
  state = {
    friendsList: []
  };

  // will fire once app is mounted
  componentDidMount() {
    this.getData();
  }
  getData = () => {
    // get request
    // add the token to the authrization header
    const token = window.localStorage.getItem("token");
    // axios
    axiosWithAuth()
      .get("/api/friends")
      .then(res => {
        console.log("REQUEST:", res);
        this.state.friendsList = res.data;
      })
      .catch(err => console.log("ERROR:", err));
  };

  renderData = () => {
    const renderedData = [];
    // checking state update
    console.log("FRIENDS-LIST-STATE:", this.state.friendsList);
    this.state.friendsList.map(friend => renderedData.push(friend));
    return renderedData;
  };

  render() {
    const friendsGroup = this.renderData();
    console.log("FRIENDS-GROUP:", friendsGroup);
    return (
      <div>
        <h1>Friends List</h1>
        <p>
          {friendsGroup.map(friend => (
            <div>
              <h3>{friend.name}</h3>
              <p>{friend.age}</p>
              <p>EMAIL: {friend.email}</p>
            </div>
          ))}
        </p>
      </div>
    );
  }
}

export default FriendsList;