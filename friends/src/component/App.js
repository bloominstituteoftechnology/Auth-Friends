import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';
import '../App.css';
import { fetchFriends, deleteFriend } from '../actions';
import CreateFriend from './CreateFriendForm';


class App extends Component {
    componentDidMount() {
      this.props.fetchFriends();
    }

    deleteFriend = id => {
        this.props.deleteFriend({
          id: id
        });
      };

      render() {
        return (
          <div className="App">
            <div className="addFriendForm">
              <CreateFriend />
            </div>
            {this.props.fetching ? (
              <img src={logo} className="App-logo" alt="logo" />
            ) : (
              <ul>
                {this.props.friends.map(friend => {
                  return (
                    <li key={friend.id}>
                      Name: {friend.name}
                      <br />
                      Age: {friend.age}
                      <br />
                      Email: {friend.email}
                      <br />
                      <button
                        className="deleteButton"
                        onClick={() => this.deleteFriend(friend.id)}
                      >
                        Delete
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        );
      }
}

const mapStateToProps = ({ friendsReducer }) => {
    return {
      friends: friendsReducer.friends,
      fetching: friendsReducer.fetching,
      error: friendsReducer.error
    };
  };
  
  const actions = {
    fetchFriends,
    deleteFriend
  };
  
  export default connect(mapStateToProps, actions)(App);