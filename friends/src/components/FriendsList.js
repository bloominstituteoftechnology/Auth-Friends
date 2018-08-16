import React from 'react'; 
import Friend from './Friend';

const FriendsList = (props) => {
    return (
        <div className = "friendsList">
            {props.list.map((friend, index) => {
                return <Friend key = {index} name = {friend.name} age = {friend.age} email = {friend.email} />
            })}
        </div>
    )
}

export default FriendsList; 