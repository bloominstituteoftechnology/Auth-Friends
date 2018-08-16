import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import FriendForm from './FriendForm';
import {getFriends} from '../actions';
import {connect} from 'react-redux';


class App extends Component {
  render() {
    return (
      <div className="App">
      <header>
        <h1 className="Title">{`F.R.I.E.N.D.S`}</h1>
        <FriendForm />
      </header>
      {this.props.error ? <h3>Error Fetching Friends</h3> : null}
      {/* <div>
        {this.props.gettingFriends ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <Friends friends={this.props.friends} />
        )}
      
        </div> */}

      </div>
    );
  }
}

const mapStateToProps = state => {
  const {friendsReducer} = state;
  return {
    friends: friendsReducer.friends,
    error: friendsReducer.error,
    gettingFriends: friendsReducer.gettingFriends
  };
};

export default connect(mapStateToProps,{getFriends})(App);
