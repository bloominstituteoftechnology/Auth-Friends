import React from "react";
import "./FriendCard.css";
import axios from "axios";
import { getFriendsData, addNewFriend } from "../actions";

class FriendForm extends React.Component {
  constructor() {
    super();
    this.state = {
      newFriend: { name: "", age: "", email: "" }
    };
  }

  handleChange(e) {
    const nf = {
      ...this.state.newFriend,
      [e.target.name]: e.target.value
    };
    this.setState({ newFriend: nf }, console.log(this.state));
  }
  addNewFriend(e) {
    console.log("add new friend");
  }
  render() {
    return (
      <form name="form">
        Name:
        <input
          onChange={this.handleChange.bind(this)}
          name="name"
          type="text"
          value={this.state.newFriend.name}
          required
        />
        Age:
        <input
          onChange={this.handleChange.bind(this)}
          name="age"
          type="number"
          value={this.state.newFriend.age}
        />
        Email:
        <input
          onChange={this.handleChange.bind(this)}
          name="email"
          type="text"
          value={this.state.newFriend.email}
          required
        />
        <div
          className="nav-link button"
          onClick={event => {
            console.log(this.state.newFriend);
            axios
              .post("http://localhost:5000/api/friends", this.state.newFriend)
              .then(response => {
                getFriendsData();

                console.log(response);
              })
              .catch(err => console.log(err));
            // this.props.addNewFriend(this.state.newFriend);
            // this.props.history.push("/friends");
          }}
        >
          Submit!
        </div>
      </form>
    );
  }
}

export default FriendForm;
