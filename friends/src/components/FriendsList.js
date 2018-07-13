import React from 'react';
import '../App.css';
import logo from '../logo.svg';
import { connect } from 'react-redux'
import { deleteFriend } from '../actions'
import { getFriend } from '../actions'
import styled from 'styled-components'

const FriendSpan = styled.span`
  &:hover {
    cursor:pointer;
    text-decoration:underline;
  }
`

const XButton = styled.span`
    &:hover {
    cursor:pointer;
    font-weight:bold;
  }
`

class FriendsList extends React.Component{

  render(){
    return (
      <div>
        { (this.props.fetching) ? 
            <img src={logo} className="App-logo" alt="logo" /> : 
            this.props.friends.map (friend =>
              <div key={Math.random()}>
                <FriendSpan onClick={()=>this.props.getFriend(friend.id)}>{friend.name}</FriendSpan>
                <XButton onClick={() => this.props.deleteFriend(friend.id)}> &#10006;</XButton> 
              </div>)
        }     
      </div>
    );  
  }
};

const MapStateToProps = (state) => {
  return {
    
  }
}

export default connect(MapStateToProps,{deleteFriend, getFriend})(FriendsList);