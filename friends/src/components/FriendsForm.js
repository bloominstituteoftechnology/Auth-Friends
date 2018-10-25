import React from "react";

class FriendsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newFriend: {
        name: "",
        age: "",
        email: ""
      }
    };
  }
  handleFriendInput = e => {
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [e.target.name]: e.target.value
      }
    });
  };
  addFriend = e => {
    e.preventDefault();
    this.props.addFriend(this.state.newFriend);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addFriend}>
          <input
            type="text"
            placeholder="name"
            onChange={this.handleFriendInput}
            value={this.state.newFriend.name}
            name="name"
          />
          <input
            type="text"
            placeholder="age"
            onChange={this.handleFriendInput}
            value={this.state.newFriend.age}
            name="age"
          />
          <input
            type="text"
            placeholder="email"
            onChange={this.handleFriendInput}
            value={this.state.newFriend.email}
            name="email"
          />
          <input type="submit" value="Add New Friend" />
        </form>
      </div>
    );
  }
}

export default FriendsForm;
