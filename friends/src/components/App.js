import React, { Component } from 'react';
import '../styles/App.css';
import { connect } from 'react-redux';
//import {friendsReducer} from '../reducers/friendsReducer' don't think i need this. 
import {getFriends, postFriends, updateFriends, deleteFriends} from '../actions';
import FriendsContainer from './FriendsContainer';
import FriendsForm from './FriendsForm';

let currentId; 
class App extends Component {

  componentDidMount() {
    this.props.getFriends()
  }

  gatherFriend = () => {
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
    return friend; 
  }
  addingFriend  = () => {
    this.props.postFriends(this.gatherFriend())
  }

  friendClick = (id, name, age, email ) => {
    console.log("clicked friend", id, name, age, email)
    this.name.value = name; 
    this.age.value = age;
    this.email.value = email; 
    currentId = id; 
  }
  updateFriend = () => {
    this.props.updateFriends(currentId, this.gatherFriend()); 
  }

  render() {
    const friends = this.props.friends; 
    console.log(friends); 
    return (
      <div className="App">
        <FriendsContainer friends={friends} onClick = {this.friendClick}/>
        <div>
          <input type="text" placeholder="...enter Name" name = 'name' ref={input => this.name = input}/>
          <input type="text" placeholder ="...enter Age" name = 'age' ref = {input => this.age = input}/>
          <input type="text" placeholder ="...enter email" name = 'email' ref = {input => this.email = input}/>
          <button onClick = {this.addingFriend}>Add</button>
          <button onClick={this.updateFriend}>Update</button>
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
