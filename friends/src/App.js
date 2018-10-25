import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchFriends } from './actions'
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.fetchFriends();
  }

  render() {
    return (
      <div className="App">
      {this.props.friends.map(friends => {
        return(
          <div>{friends.name}</div>
        )
      })}
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    friends: state.friendsReducer.friends,
    isFetching: state.friendsReducer.isFetching,
    error: state.friendsReducer.error
  }
}

export default connect(
  mapStateToProps, {
    fetchFriends
  }
)(App)



