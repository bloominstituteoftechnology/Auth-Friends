import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
// import moment from 'moment';

class GetFriends extends React.Component {
  state = {
    friends: [],
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get("/friends")
      .then((res) => this.setState({ ...this.state, friends: res.data }))
      .catch((err) => console.log("getData error:", err));
  };

  render() {
    return (
      <div className="gas-prices">
        {this.state.friends.map((friend) => (
          <div key={friend.id}>
            <p>name: {friend.name}</p>
            <p>age: {friend.age}</p>
            <p>email: {friend.email}</p>
          </div>
          
        ))}
      </div>
    );
  }
}

export default GetFriends;
