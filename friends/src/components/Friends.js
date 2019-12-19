import React from "react";
import axioswithAuth from "../utils/axiosWithAuth";
​
class Friends extends React.Component {
  state = {
    addFriend: {
      name: "",
      age: "",
      email: ""
    },
    friendList: []
  };
​
  handleChange = e => {
    this.setState({
      addFriend: {
        ...this.state.addFriend,
        [e.target.name]: e.target.value
      }
    });
  };
​
  createFriend = e => {
    // e.preventDefault();
    axioswithAuth()
      .post("/friends", this.state.addFriend)
      .then(res => {
        // localStorage.setItem("token", res.data.payload);
        this.props.history.push("/friends");
      })
      .catch(err => console.log(err));
  };
​
  componentDidMount() {
    axioswithAuth()
      .get("/friends")
      .then(res => {
        console.log(res);
        this.setState({ friendList: res.data });
      });
  }
​
  render() {
    return (
      <div>
        <form onSubmit={this.createFriend}>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={this.state.addFriend.name}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="age"
            placeholder="age"
            value={this.state.addFriend.age}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="email"
            placeholder="email"
            value={this.state.addFriend.email}
            onChange={this.handleChange}
          />
          <button type="submit">Add Friend</button>
        </form>
        {this.state.friendList.map(friends => {
          return (
            <div key={friends.id}>
              <p>{friends.name}</p>
              <p>{friends.age}</p>
              <p>{friends.email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
​
export default Friends;





