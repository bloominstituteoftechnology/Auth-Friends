import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends } from "../../actions/index.js"

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getFriends();
  }
  render() {
    return (
      <div className="App" friends={this.props.friends}>
        {this.props.fetching ? (<img src="http://placekitten.com/200/300" className="App-logo" alt="logo" />) : (
          <ul friends={this.props.friends}>
            {this.props.friends.map(friend => {
               return <li key={friend.name}>{friend.name}</li>;
             })}
          </ul>)
          }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friendReducer.friends.data,
    fetching: state.friendReducer.fetchingFriends

  }
}
// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
export default connect(mapStateToProps, { getFriends })(App);
