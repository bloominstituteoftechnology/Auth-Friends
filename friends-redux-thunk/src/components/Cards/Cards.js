import React, { Component } from "react";
import { connect } from "react-redux";

import logo from "../../logo.svg";

import { getFriends } from "../../actions";
import Card from "../Card/Card";

class Cards extends Component {
  componentDidMount() {
    this.props.getFriends();
  }
  render() {
    // console.log("this.props.state", this.props.state);
    const state = this.props.state;
    const { fetchingFriends, friendsFetched, error, friends } = state;
    // console.log("friends",friends)
    console.log("fetchingFriends", fetchingFriends);
    return (
      <React.Fragment>
        {fetchingFriends && !friendsFetched ? (
          <div>
            <img src={logo} className="App-logo" alt="logo" />
            <div>Fetching friends</div>
          </div>
        ) : friendsFetched ? (
          friends.map(friend => this.fillFriendCard(friend))
        ) : (
          <div>
            <h3>Something went wrong, please, reload the page</h3>
            <h4>{error}</h4>
          </div>
        )}
      </React.Fragment>
    );
  }

  fillFriendCard(friend) {
    console.log("friend", friend);
    return <Card id={friend.id} friend={friend} key={Date.now()} />;
  }
}
const stateToProps = state => {
  return {
    state: state.friendsReducer
  };
};
export default connect(stateToProps, { getFriends })(Cards);
