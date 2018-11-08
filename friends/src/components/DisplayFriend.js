import React from 'react';

const DisplayFriend = (props)=>{
    return(
        <div>
            <h2>Name: {props.friend.name}</h2>
            <h3>Age: {props.friend.age}</h3>
            <p>Email: {props.friend.email}</p>
        </div>
    )
}

export default DisplayFriend;