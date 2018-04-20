import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import {friendsActionCreator } from './actions';
import createNewFriend from './createFriend';
import ListOfFriends from './listOfFriends';


class App extends Component {
  constructor(props){
    super(props)
    this.state={
      Friend:"",
    }
  }
  componentDidMount =() =>{
    this.props.friendsActionCreator();
  }
  addFriendHandler = (event)=>{
    this.setState({[event.target.name]: event.target.value})
  }
  render() {
    console.log('p',this.props)
    return (
      <div className="App">        
          <h1 className="App-title">Welcome to Friends List </h1>
          <input
          type=" text"
          placeholder="add friend"
          name="Friend"
          value={this.state.Friend}
          onChange={this.addFriendHandler}         
          />
        <button onClick={()=>{this.props.createNewFriend({friend:this.state.Friend});
         this.setState({Friend:''})}}> 
         Add a Friend </button> 
        <ListOfFriends />         
      </div>
    );
  }
}
 const mapStateToProps = (state)=>{  
   return {
     friends: state.friendsReducer.friends ,
     error: state.friendsReducer.error,
     fetchedFriends: state.friendsReducer.fetchedFriends,
     fetchingFriends: state.friendsReducer.fetchingFriends, 
 }
 }
export default connect(mapStateToProps, { friendsActionCreator, createNewFriend})(App);
