import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { getFriends, addFriend } from './actions';
import Friends from './components/Friends.js';
import CreateFriendForm from './components/CreateFriendForm.js';

class App extends Component {
  
  state = {
    name: '',
    age: '',
    email: ''
  }

  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div className="App">

        {this.props.fetching ? (
          <h2>Fetching data...</h2>
        ) : (
          <div>
            <Friends />
            <CreateFriendForm />
          </div>        
        )}
        
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  console.log(state);
  return {
    friends: state.friends,
    
    friendsFetched: state.friendsFetched,

    error: state.error
  }
}



export default connect(mapStatetoProps, {
  getFriends,
  addFriend
})(App);
