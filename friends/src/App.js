import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { friendsFetch } from "./actions/index";
import FriendsList from "./components/friendsList";

class App extends Component {
  componentDidMount() {
    this.props.friendsFetch();
  }
  render() {
    return (
      <div className="App">
        {this.props.friendsFetched ? (  
             <FriendsList friends={this.props.friends}/> 
        ) : (
          <div> LOADERING </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friendsFetched: state.listReducer.friendsFetched,
    friends: state.listReducer.friends
  };
};

export default connect(
  mapStateToProps,
  { friendsFetch }
)(App);
