import React from 'react';
import { Link } from 'react-router-dom';
import panda from '../img/panda.png';
import { FriendImage, FriendLayout } from './StyledComponents.js';
import Friend from './Friend';
import { connect } from 'react-redux';


const FriendProfile = (props) => {
    const friend = props.friends.find(item => `${item.id}` === props.match.params.id);
    return (
    <FriendLayout>
        <FriendImage src={panda} alt='panda'/>
        <h1>{friend.name}</h1>
        <p>{friend.age}</p>
        <p>{friend.email}</p>
        <button>Update Friend</button>
        <button>Unfriend</button>
    </FriendLayout>
    )
}

const mapStateToProps = (state) => {
    return {
    friends: state.friends,
    }
  };
  
export default connect(mapStateToProps)(FriendProfile);
