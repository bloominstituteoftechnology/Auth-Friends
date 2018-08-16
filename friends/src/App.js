import React, { Component, Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";

// import { setInitialStateReducer } from "./reducers/setInitialStateReducer";
import { fetchFriendData } from "./actions/fetchApiAction";
import { addNewFriend } from "./actions/addNewFriendAction";
import { connect } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newFriend: ""
    };
  }
  componentDidMount() {
    this.props.fetchFriendData();
  }

  inputChangeHandler = event => {
    console.log("InputChange handler Working", event.target.value);
    this.setState({ newFriend: event.target.value });
  };

  render() {
    console.log("NewFriend", this.state.newFriend);
    return (
      <div className="App">
        {this.props.isFetching ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <Fragment>
            <ul style={{ listStyle: "none" }}>
              {this.props.friends.map(friend => {
                return <li key={friend.name}>{friend.name}</li>;
              })}
            </ul>
            <form>
              <input
                placeholder="name..."
                value={this.state.newFriend}
                onChange={this.inputChangeHandler}
              />
            </form>
          </Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.setInitialStateReducer.friends,
    isFetching: state.setInitialStateReducer.isFetching
  };
};

export default connect(
  mapStateToProps,
  {
    fetchFriendData,
    addNewFriend
  }
)(App);
