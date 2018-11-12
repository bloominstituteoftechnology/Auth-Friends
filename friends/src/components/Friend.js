import React from 'react';
const Friend = (props) => {
    return(
        <div className='friend'>
            <h1>{props.friend.name}'s details:</h1>
            <h2><span>Name:</span>{" "}{props.friend.name}</h2>
            <h2><span>Email:</span>{" "}{props.friend.email}</h2>
            <h2><span>Age:</span>{" "}{props.friend.age}</h2>
        </div>
    )
}

export default Friend;