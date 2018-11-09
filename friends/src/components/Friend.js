import React from "react";
import { connect } from "react-redux";

import { deleteFriend, updateFriend } from "../actions/actions";

export class Friend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      name: this.props.friend.name,
      age: this.props.friend.age,
      email: this.props.friend.email,
      id: this.props.friend.id
    };
  }

  inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  updateFriendHandler = e => {
    e.preventDefault();
    this.props.updateFriend(this.state);
    this.setState({...this.state, clicked: false})
  };

  updateOpener = () => {
    this.setState({...this.state, clicked: true });
  };

  render() {
    const { friend, deleteFriend } = this.props;
    if (this.state.clicked) {
      return (
        <>
          <div>
            <h2>{friend.name}</h2>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
          </div>
          <form onSubmit={this.updateFriendHandler}>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.inputHandler}
              placeholder="Name"
            />
            <input
              type="number"
              name="age"
              value={this.state.age}
              onChange={this.inputHandler}
              placeholder="Age"
            />
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.inputHandler}
              placeholder="Email"
            />
            <button type="submit">Submit Changes</button>
          </form>
        </>
      );
    } else {
      return (
        <div>
          <h2>{friend.name}</h2>
          <p>Age: {friend.age}</p>
          <p>Email: {friend.email}</p>
          <button onClick={() => deleteFriend(friend.id)}>
            Delete {friend.name}
          </button>
          <button onClick={this.updateOpener}>Update {friend.name}</button>
        </div>
      );
    }
  }
}

const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  { deleteFriend, updateFriend }
)(Friend);
