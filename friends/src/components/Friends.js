import React from "react";
import { getFriends, deleteFriend } from "../actions/action";
import { connect } from "react-redux";
import logo from "../logo.svg";
import Friend from "./Friend";

class Friends extends React.Component {
  constructor() {
    super();
    this.state = {
      friend: ""
    };
  }
  componentDidMount() {
    this.props.getFriends("http://localhost:5000/api/friends/");
  }

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
                <Friend friend={friend} />
              </div>
            );
          })}
        </div>
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
  { getFriends, deleteFriend }
)(Friends);
