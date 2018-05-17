import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';

import { fetchFriends } from './actions/index';
import Friends from './components/Friends';
import CreateFriendsForm from './components/CreateFriendForm';

class App extends Component {
  
  componentDidMount() {
    this.props.fetchFriends();
  }



  render() {
    return (
      <div className="container App">
        {this.props.goodbye ? <h1 className="display-1">But why? If you keep acting like this you will die alone!</h1> :   
          <header className="App-header">          
            <h1 className="App-title">Welcome to another Friends App</h1>
          </header>
        }
        {this.props.fetchingFriends 
          ? <img src={logo} className="App-logo" alt="logo" /> 
          : <Friends /> }
        <CreateFriendsForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  
  return {
    fetchingFriends: state.friendsReducer.fetchingFriends,
    goodbye: state.friendsReducer.friendDeleted
  }
}


export default connect(mapStateToProps, { fetchFriends })(App);
