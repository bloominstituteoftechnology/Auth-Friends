import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getFriends } from './actions';
import AddFriend from './containers/AddFriend';

class App extends Component {
  // mount component to props
  componentDidMount() {
    this.props.getFriends();
  }
  // build basic html/jsx inside return for friendslist
  render() {
    return (
      <div className="friends">
        <ul className="Friends-list">
          {this.props.friends.map(friend => {
            return (
              <li key={friend.id}>
                <div className="Friend-name">{friend.name}</div>
                <div className="Friend-age">{`Age: ${friend.age}`}</div>
                <div className="Friend-email">{`Email: ${friend.email}`}</div>
              </li>
            );
          })}
        </ul>
        <AddFriend />
      </div>
      
    );
  }
}
  // mapStateToProps
const mapStateToProps= (state) => {
  return {
    friends: state.friendReducer.friends,
    fetchFriends: state.friendReducer.fetchFriends,
    error: state.friendReducer.error
  };
};
// connect components
export default connect(mapStateToProps, { getFriends }) (App);
