import React, { Component } from "react";

// import "./App.css";
import logo from "../logo.svg";
import Friends from "./Friends";
import FriendForm from "./FriendForm";
import { getFriends } from "../actions";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    this.props.getFriends();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{`Friendly's Friends`}</h1>
          <FriendForm />
        </header>
        {this.props.error ? <h2>Error Fetchin</h2> : null}
        <div>
          {this.props.gettingFriends ? (
            <h1>LOADING</h1>
          ) : (
            <Friends friends={this.props.friends} />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { friendsReducer } = state;
  return {
    friends: friendsReducer.friends,
    error: friendsReducer.error,
    gettingFriends: friendsReducer.gettingFriends
  };
};

// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
export default connect(
  mapStateToProps,
  { getFriends }
)(App);
