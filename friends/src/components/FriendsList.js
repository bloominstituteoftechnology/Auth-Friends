import React from 'react';
import '../App.css';
import logo from '../logo.svg';

const FriendsList = props => {

  return (
    <div>
      { (props.fetching) ? 
          <img src={logo} className="App-logo" alt="logo" /> : 
          props.friends.map (friend => <p key={Math.random()}>{friend.name}<span> &#10006;</span></p> )
      }     
    </div>
  );
};

export default FriendsList;