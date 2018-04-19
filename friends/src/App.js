import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { getFriends, addFriend, deleteFriend } from "./actions";

class App extends Component {
  componentDidMount() {
    this.props.getFriends();
  }
  render() {
    let nameInput;
    let ageInput;
    let emailInput;
    return (
      <div className="App">
        {this.props.fetching ? (
          <img src={logo} />
        ) : (
          <ul>
            {this.props.friends.map(friend => {
              return (
                <div>
                  <li className="friendName">{friend.name}</li>
                  <li className="friendAge">{friend.age}</li>
                  <li className="friendEmail">{friend.email}</li>
                  <button onClick={() => this.props.deleteFriend(friend.id)}>
                    Remove Friend
                  </button>
                  <hr />
                </div>
              );
            })}
          </ul>
        )}
        <form
          onSubmit={event => {
            event.preventDefault();
            console.log(nameInput.value);
            this.props.addFriend({
              name: nameInput.value,
              age: ageInput.value,
              email: emailInput.value
            });
            (nameInput.value = ""),
              (ageInput.value = ""),
              (emailInput.value = "");
          }}
        >
          <input
            ref={name => (nameInput = name)}
            placeholder="Friend Name"
            required
          />
          <input ref={age => (ageInput = age)} placeholder="Age" required />
          <input
            ref={email => (emailInput = email)}
            placeholder="Email"
            required
          />
          <button type="submit">Add New Friend </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    fetching: state.fetching,
    error: state.error,
    friends: state.friends
  };
};
export default connect(mapStateToProps, {
  getFriends,
  addFriend,
  deleteFriend
})(App);
