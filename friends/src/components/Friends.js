import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class Friends extends React.Component {
  state = {
    friends: [],
    newFriend: {
        name: "",
        age: "",
        email: ""
    }
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get("/api/friends")
      .then(res => {
        console.log(res);
        this.setState({
          friends: res.data
        });
      })
      .catch(err => console.log(err));
  };

  handleChanges = e => {
    this.setState({
        newFriend: {
            ...this.state.newFriend,
            [e.target.name]: e.target.value
        }
    });
    console.log(e.target.name, '=', e.target.value)

  };

  createFriend = () => {
    axiosWithAuth()
      .post("/api/friends", this.state.newFriend)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.createFriend}>
          <label>
            Name:
            <input
              name="name"
              value={this.state.newFriend.name}
              onChange={this.handleChanges}
            />
          </label>
          <label>
            Age:
            <input
              name="age"
              value={this.state.newFriend.age}
              onChange={this.handleChanges}
            />
          </label>
          <label>
            Email:
            <input
              name="email"
              value={this.state.newFriend.email}
              onChange={this.handleChanges}
            />
          </label>
          {/* <button 
          type="submit" 
          placeholder="Add Friend" 
          onClick={this.createFriend} 
          /> */}
          <button>
              Add Friend
          </button>
        </form>
        {this.state.friends.map(friends => {
          return (
            <div key={friends.id}>
              <h4>Name: {friends.name}</h4>
              <p>Age: {friends.age}</p>
              <p>Email: {friends.email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Friends;