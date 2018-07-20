import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { getFriends, addFriend } from './actions';
import { connect } from 'react-redux';
import InputForum from './forum';

class App extends Component {
componentDidMount(){
	this.props.getFriends();
}
  render() {
    return (
      <div className="App">
	  <div className="list">
	  {this.props.fetchingFriends ? (
	  <img src={logo} className="App-logo" alt="logo" /> ) : null 
	  }
		  {this.props.friendsFetched ? (
		  this.props.friends.map (friend => <div key={Math.random(Date.now())}>{friend.name}</div>) ) : null 
		  }
	  </div>
	  <InputForum addFriend={this.props.addFriend}/>
		  {/*pass in the action as a prop value*/}
      </div>
    );
  }
}

const stateToProps = (state) => {
return {
	friends:state.friends,
	fetchingFriends:state.fetchingFriends,
	friendsFetched:state.friendsFetched
	};
};

export default connect(stateToProps, { getFriends,addFriend })(App);
