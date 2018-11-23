import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Friends from '././Components/Friends';
import FriendForm from '././Components/FriendForm';
import { loadFriends } from './actions/index';
import { connect } from 'react-redux';



class App extends Component {
  componentDidMount() {
    this.props.loadFriends();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-Title">{`Jesse's Friends`}</h1>
          <FriendForm />
        </header>
        {this.props.error ? <h3>Error loading Friends</h3> : null}
        <div className="Flex-Container">
          {this.props.loadingFriends ? (
            <img src={logo} className="App-logo" alt="logo" />
          ) : (
            <Friends friends={this.props.friends} />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { friendsReducer } = state;
  return {
    friends: friendsReducer.friends,
    error: friendsReducer.error,
    gettingFriends: friendsReducer.gettingFriends
  };
};

export default connect(mapStateToProps, { loadFriends })(App);