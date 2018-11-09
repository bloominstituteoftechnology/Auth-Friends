import React from 'react';
import { connect } from 'react-redux';
import Friend from './friend';

const FriendsList = () =>{
    return(
        <div>
        {props.friends.map(item=>{
            <Friend key={item.id} friend={item} />
        })}
        </div>
    )
}
const mapStateToProps= state =>{
    return {
        friends: state.friends
    }
}
export default connect(mapStateToProps)( FriendsList)