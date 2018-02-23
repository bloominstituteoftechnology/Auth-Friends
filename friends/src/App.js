import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getFriends } from './actions/index';
import FriendForm from './components/FriendForm';

class App extends Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div>
        <FriendForm />
        <ul>
          {this.props.friends.map((friend, i) => {
            return (
              <div>
                <div className="friend__name">{friend.name}</div>
                <div className="friend__age">{friend.age}</div>
                <div className="friend__email">{friend.email}</div>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
  };
};

export default connect(mapStateToProps, { getFriends })(App);
