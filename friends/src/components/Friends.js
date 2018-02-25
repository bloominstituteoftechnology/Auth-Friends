import React, { Component } from 'react';
import { connect } from "react-redux";
//import SelectedFriend from "./SelectedFriend";
import { deleteFriend, updateFriend, toggleUpdateFriend } from "../actions";
//import UpdateFriendForm from "./UpdateFriendForm";
//import logo from './logo.svg';

class Friends extends Component {
  constructor(props){
    super(props);

    this.state = {
    
    }
  }

  render(){
		console.log(this.props.friends);
    return (
				<div className="container">
           <div className="friend-grid">
              {this.props.friends.map((friend, i) => {
								console.log(this.props.friends);	
                 return (
                   <div key={i} className="friend">
                     <h2 className="friend-name" id={`friend-name-${i}`}>{friend.name}</h2>
                     <div className="friend-age">{`Age: ${friend.age}`}</div>
                     <div className="friend-email">{`Email: ${friend.email}`}</div>
                     <div className="friend-phone">{`Phone number: ${friend.phoneNumber}`}</div>
                     <div className="friend-favorite-color">{`Favorite color: ${friend.favoriteColor}`}</div>
                     <div className="friend-buttons">
                       <button type="button" id={`update-${i}`} onClick={this.toggleUpdate}>Update</button>
                       <button type="button" id={`delete-${i}`} onClick={this.deleteFriend}>Delete</button>
                     </div>
                   </div>
                 );
              })}
             </div>
           </div>
       );
    } 				
	}

const mapStateToProps = (state) => {
  console.log(state.friends);
	return {
    friends: state.friendsReducer.friends,
    error: state.friendsReducer.error,
    showUpdate: state.singleFriendReducer.showUpdate,
    friendSelected: state.singleFriendReducer.friendSelected
  }
}

export default connect(mapStateToProps, {deleteFriend, updateFriend, toggleUpdateFriend})(Friends);

