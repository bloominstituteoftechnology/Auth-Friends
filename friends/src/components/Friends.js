import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
class FriendsList extends React.Component {
  state = {
    friends: [],
    newFriend: {
      name: "",
      age: "",
      email: "",
    },
  };
  handleChange = (e) => {
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [e.target.name]: e.target.value,
      },
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/friends", this.state.newFriend)
      .then((res) => {
        this.setState({
          friends: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
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
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <h1>Add new friends!</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            value={this.state.newFriend.name}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="age"
            value={this.state.newFriend.age}
            onChange={this.handleChange}
          />
          <input
            type="email"
            name="email"
            value={this.state.newFriend.email}
            onChange={this.handleChange}
          />
          <button>Add a new friend!</button>
        </form>
        {!this.state.friends
          ? null
          : this.state.friends.map((item) => (
              <div>
                <h2>{item.name}</h2>
                <p>{item.age}</p>
                <p>{item.email}</p>
              </div>
            ))}
      </div>
    );
  }
}
export default FriendsList;
