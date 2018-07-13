import React from 'react';
import '../App.css';
import logo from '../logo.svg';
import { connect } from 'react-redux'
import { deleteFriend } from '../actions'

class FriendsList extends React.Component{

  render(){
    return (
      <div>
        { (this.props.fetching) ? 
            <img src={logo} className="App-logo" alt="logo" /> : 
            this.props.friends.map (friend => <p key={Math.random()}>{friend.name}<span onClick={() => this.props.deleteFriend(friend.id)}> &#10006;</span></p> )
        }     
      </div>
    );  
  }
};

const MapStateToProps = (state) => {
  return {
    
  }
}

export default connect(MapStateToProps,{deleteFriend})(FriendsList);