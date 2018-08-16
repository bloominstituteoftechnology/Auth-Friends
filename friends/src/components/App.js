import React, { Component } from 'react';
import '../styles/App.css';
import { connect } from 'react-redux';
//import {friendsReducer} from '../reducers/friendsReducer' don't think i need this. 
import {getFriends, postFriends, updateFriends, deleteFriends} from '../actions';
import FriendsContainer from './FriendsContainer';
import FriendsForm from './FriendsForm';
import styled from 'styled-components'; 

let currentId; 
let clickedOn = false; 

const FormDiv = styled.div `
    margin: 0 auto; 
    width: 600px; 

`
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
    clickedOn = false; 
    this.props.postFriends(this.gatherFriend())
  }

  friendClick = (id, name, age, email ) => {
    console.log("clicked friend", id, name, age, email)
    this.name.value = name; 
    this.age.value = age;
    this.email.value = email; 
    currentId = id; 
    clickedOn = true; 
    this.forceUpdate();
  }
  updateFriend = () => {
    clickedOn = false; 
    this.props.updateFriends(currentId, this.gatherFriend()); 
  }
  deleteFriend = (id, name, email) => {
   const del =prompt(`You are about to delete your friend ${name} ${email} are you sure? This cannot be undone. 
   If you wish to delete ${name} enter in the word >>> delete  (just the word no special characters)`);

   if(del.length > 0 && del.toLowerCase() === 'delete'){
     this.props.deleteFriends(id); 
   }
  }

  render() {
    const friends = this.props.friends; 
    console.log(friends); 
    console.log(clickedOn)
    return (
      <div className="App">
        <FriendsContainer friends={friends} onClick = {this.friendClick} delete = {this.deleteFriend}/>
        <FormDiv>
          <input type="text" placeholder="...enter Name" name = 'name' ref={input => this.name = input}/>
          <input type="text" placeholder ="...enter Age" name = 'age' ref = {input => this.age = input}/>
          <input type="text" placeholder ="...enter email" name = 'email' ref = {input => this.email = input}/>
          {clickedOn === false ? <button onClick = {this.addingFriend}>Add</button> : null}
          {clickedOn === true ? <button onClick={this.updateFriend}>Update</button> : null}
        </FormDiv>
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
