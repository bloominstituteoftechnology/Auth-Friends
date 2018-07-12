import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";
import { fetchFriends } from "./actions";

class App extends Component {
  componentDidMount() {
    let URL = "http://localhost:5000/api/friends";
    this.props.fetchFriends(URL);
  }

  render() {
    return (
      <div className="App">
        {this.props.fetching ? (
          <div>
            <p>CONTACTING SERVER...</p>
            <img
              src="https://media1.giphy.com/media/3o8doMpxlWKWYqk6AM/giphy.gif"
              alt="loading animation"
              className="loading-animation"
            />
          </div>
        ) : null}
        {this.props.friends.map(friend => {
          return <div key={friend.name}>{friend.name}</div>;
        })}
        {this.props.error !== null ? <div>{this.props.error}</div> : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.friends.fetching,
    fetched: state.friends.fetched,
    error: state.friends.error,
    friends: state.friends.friends
  };
};

export default connect(
  mapStateToProps,
  {
    fetchFriends
  }
)(App);
