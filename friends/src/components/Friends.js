import React from "react";
import { getFriends, submitNewFriend, deleteFriend } from "../actions/action";
import { connect } from "react-redux";
import logo from "../logo.svg";

class Friends extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      name: "",
      age: "",
      email: ""
    };
  }
  componentDidMount() {
    this.props.getFriends("http://localhost:5000/api/friends/");
  }
  inputFriend = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  submitNewFriend = event => {
    event.preventDefault();
    let newFriends = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };
    this.props.submitNewFriend(newFriends);
    this.setState({ name: "", age: "", email: "" });
  };

  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div>
          {this.props.friends.map(friend => {
            return (
              <div key={Math.random()}>
                {friend.name}
                <button onClick={() => this.props.deleteFriend(friend.id)}>
                  Delete
                </button>
              </div>
            );
          })}
        </div>
        <form>
          <input
            type="text"
            name="name"
            onChange={this.inputFriend}
            placeholder="Name"
            value={this.state.name}
          />
          <input
            type="number"
            name="age"
            onChange={this.inputFriend}
            placeholder="Age"
            value={this.state.age}
          />
          <input
            type="text"
            name="email"
            onChange={this.inputFriend}
            placeholder="Email"
            value={this.state.email}
          />
          <button onClick={this.submitNewFriend}>Add New Friend</button>
        </form>
        <p>{this.props.error}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    fetching: state.fetchingFriends,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getFriends, submitNewFriend, deleteFriend }
)(Friends);
