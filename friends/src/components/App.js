import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/App.css";
import { fetchingData } from '../actions/index';

class App extends Component {
  componentDidMount() {
    this.props.fetchingData();
  }

  render() {
    return (
      <div className="App">
        {this.props.fetchingFriends ? (
         <h2>Fetching Friends</h2>
        ) : (
           <ul>
             {this.props.friends.map(friend => {
               return <p key={friend.id}>{friend.name}</p>;
             })}
           </ul>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = state => {
  return {
    friends: state.friends,
    fetchingFriends: state.fetchingFriends
  };
}

export default connect(
  mapDispatchToProps,
  { fetchingData }
)(App);
