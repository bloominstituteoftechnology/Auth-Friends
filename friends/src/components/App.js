import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getFriends } from '../actions/actions';

import '../App.css';

class App extends Component {

  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div className="App">
      <div className="friends-list">
        {this.props.fetchingFriends ? (
          <h1>Getting friends at the moment.....</h1>
        ) : null }
          
            {this.props.friendsFetched ? (
              this.props.friends.map(friend => 
                <div key={friend.id}>{friend.name}</div>)
            ): null }
         </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    friends: state.friends,
    error: state.error,
    fetchingFriends: state.fetchingFriends,
    friendsFetched: state.friendsFetched
  }
}


export default connect (mapStateToProps, {getFriends})( App);
