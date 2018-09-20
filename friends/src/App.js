import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {getFriends} from './actions';
import Friends from './components/Friends';
import AddFriendForm from './components/AddFriendForm.js';

class App extends Component {
  
  componentDidMount() {
    this.props.getFriends();
  }
  render() {
    return (
      <div>
      {!this.props.friendsFetched ? 
      <h1>Loading...</h1> :
      <div>
      <AddFriendForm/>
      {this.props.friends.data.map((e,i)=><Friends key={i} data={e}/>)}
      </div>
    }
    </div>
    );
  }
}

const mapStateToProps = state=> {
  return {
    friendsFetched: state.friendsFetched,
    friends: state.friends
  }
}

export default connect(mapStateToProps,{getFriends})(App); 
