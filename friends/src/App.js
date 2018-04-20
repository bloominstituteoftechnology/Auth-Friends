import React, { Component } from "react";
import "./App.css";
import { fetchFriends, createFriend } from "./actions";
import { connect } from "react-redux";

class App extends Component {
  state = {
    name: "",
    age: "",
    email: ""
  };

  componentDidMount() {
    this.props.fetchFriends();
  }
  render() {
    return (
      <div className="App">
        <h1>Friends</h1>
        <form>
        <div className="form-div">
          <input
            type="text"
            placeholder="name"
            name="name"
            value={this.state.name}
            onChange={e => this.setState({ [e.target.name]: e.target.value })}
          />
          <input
            type="number"
            placeholder="age"
            name="age"
            value={this.state.age}
            onChange={e => this.setState({ [e.target.name]: e.target.value })}
          />
          <input
            type="text"
            placeholder="email"
            name="email"
            value={this.state.email}
            onChange={e => this.setState({ [e.target.name]: e.target.value })}
          />
        </div>
        <button
          onClick={() => {
            this.props.createFriend({
              name: this.state.name,
              age: Number(this.state.age),
              email: this.state.email
            });
            this.setState({ name: "", age: "", email: "" });
          }}
        >
          Add Friend
        </button>
        </form>
        {this.props.pending ? <h3>Loading Friends...</h3> : null}
        {this.props.error !== null ? <h4>{this.props.error}</h4> : null}
        <div className="card-container">
          {this.props.friends.map(friend => (
            <div key={friend.id} className="friend-card">
              <div>{friend.name}</div>
              <div>{friend.age}</div>
              <div>{friend.email}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    error: state.error,
    pending: state.pending
  };
};

export default connect(mapStateToProps, { fetchFriends, createFriend })(App);
