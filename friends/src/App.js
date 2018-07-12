import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";

import { fetchFriends } from "./actions/actions";
import FriendsForm from "./components/components";

class App extends Component {
  componentDidMount() {
    this.props.fetchFriends();
  }

  handleSetData = data => {
    this.setState({ friendsData: data });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Redux Friends</h1>
        </header>

        <ul>
          {this.props.friends.map(friends => {
            return <li key={friends.id}> {friends.name} </li>;
          })}
        </ul>
        <FriendsForm handleSetData={this.handleSetData} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    fetchingFriends: state.fetching,
    // friendsFetched: state.fetched,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  {
    fetchFriends
  }
)(App);
