import React from 'react';
import { connect } from 'react-redux';
import Friend from './friend';

const FriendsList = (props) =>{
    return(
        <div>
            {props.friends.map(friend => 
            <Friend key={friend.id} friend={friend} />)}
        </div>
    )
}
const mapStateToProps= state =>{
    return {
        friends: state.friends
    }
}
export default connect(mapStateToProps)( FriendsList );