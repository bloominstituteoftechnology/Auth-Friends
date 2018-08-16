import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {getFriends} from './actions';
import Friends from './components/Friends.js';
import CreateFriendForm from './components/CreateFriendForm.js';

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
      <CreateFriendForm/>
      {this.props.friends.data.map((e,i)=><Friends key={i} data={e}/>)}
      </div>
    }
    </div>
    );
  }
}
const mapStateToProps=state=>{
  return {
    friendsFetched: state.friendsFetched,
    friends: state.friends
  }
}
export default connect(mapStateToProps,{getFriends})(App);