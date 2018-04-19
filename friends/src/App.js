import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import {getFriends, updateFriend} from './actions';



class App extends Component {

  componentDidMount(){
    this.props.getFriends();
  }

  handleUpdateFriend(e, friend){
     this.props.updateFriend(friend);
  }

  render() {
    return (
      <div className="App">
      <ul>
        {this.props.friends.map(friend => <li onClick={() => this.handleUpdateFriend(friend) }>{friend.name}</li>)}
      </ul>


      </div>
    );
  }
}

const mapStateToProps = state => {
    console.log(state);
  return {

    friends: state.friends,
  }
}
export default connect(mapStateToProps, {getFriends, updateFriend})(App);
