import React, { Component } from 'react';
import '../styles/App.css';
import { connect } from 'react-redux';
//import {friendsReducer} from '../reducers/friendsReducer' don't think i need this. 
import {getFriends, postFriends, updateFriends, deleteFriends} from '../actions';
import FriendsContainer from './FriendsContainer';
import FriendsForm from './FriendsForm';

class App extends Component {

  componentDidMount() {
    this.props.getFriends()
  }

  addingFriend  = () => {
    const name = this.name.value;
    const age = this.age.value;
    const email = this.email.value; 
    const friend =  {
      name, 
      age,
      email,
    }
    this.name.value = '';
    this.age.value = '';
    this.email.value = '';
    this.props.postFriends(friend)
  }

  render() {
    const friends = this.props.friends; 
    console.log(friends); 
    return (
      <div className="App">
        <FriendsContainer friends={friends}/>
        <div>
          <input type="text" placeholder="...enter Name" name = 'name' ref={input => this.name = input}/>
          <input type="text" placeholder ="...enter Age" name = 'age' ref = {input => this.age = input}/>
          <input type="text" placeholder ="...enter email" name = 'email' ref = {input => this.email = input}/>
          <button onClick = { this.addingFriend}>Add</button>
          <button>Update</button>
          <button>Delete</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  //console.log(state); 
  return {
    fetchingFriends: state.friendsReducer.fetchingFriends,
    postingFriends:  state.friendsReducer.postingFriends,
    updatingFriends: state.friendsReducer.updatingFriends,
    deletingFriends: state.friendsReducer.deletingFriends,
    error: state.friendsReducer.error,
    friends: state.friendsReducer.friends,
  }
}

export default connect(mapStateToProps, {getFriends, postFriends, updateFriends, deleteFriends})(App)
