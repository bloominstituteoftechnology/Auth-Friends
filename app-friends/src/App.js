import React, { Component } from "react";
import { fetchFriend, createFriend } from "./actions";
import { connect } from "react-redux";

import "./App.css";

class App extends Component {
  state = {
    name: "",
    age: "",
    email: ""
  };

  componentDidMount() {
    // console.log("this.props", this.props); //works
    this.props.fetchFriend();
  }

  render() {
    // console.log("this.state:", this.state);
    console.log("this.props.friends", this.props.friends);
    return (
      <div className="App">
        {this.props.pending ? <h1>wait a few moment.</h1> : null}
        <input
          name="name"
          value={this.state.name}
          type="text"
          placeholder="Name"
          onChange={e => this.setState({ [e.target.name]: e.target.value })}
        />
        <input
          name="age"
          value={this.state.age}
          type="text"
          placeholder="Age"
          onChange={e => this.setState({ [e.target.name]: e.target.value })}
        />
        <input
          name="email"
          value={this.state.email}
          type="text"
          placeholder="Email"
          onChange={e => this.setState({ [e.target.name]: e.target.value })}
        />
        <button
          onClick={() => {
            this.props.createFriend({
              name: this.state.name,
              age: this.state.age,
              email: this.state.email
            });
            this.setState({ friend: "", age: "", email: "" });
          }}
        >
          Add Friend
        </button>

        <div>
          {this.props.friends.map(eachFriend => (
            <div key={eachFriend.id}>
              <div>
                <br/>
                <div>Name: {eachFriend.name}</div>{" "}
                <div>Age: {eachFriend.age}</div>{" "}
                <div>email: {eachFriend.email}</div>
              </div>
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

export default connect(mapStateToProps, { fetchFriend, createFriend })(App);
