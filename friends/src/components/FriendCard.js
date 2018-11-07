import React from 'react';

const FriendCard = (props)=>{
    return(
        <li>
            <h2>Name: {props.friend.name}</h2>
            <h3>Age: {props.friend.age}</h3>
            <p>Email: {props.friend.email}</p>
        </li>
    )
}

export default FriendCard;