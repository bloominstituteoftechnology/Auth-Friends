import React from 'react';

const Friend = props => {
    return (
        <div>
        <h1>
            Here are your friends!
        </h1>
            <div>{props.friend.name}</div>
            <div>{props.friend.age}</div>
            <div>{props.friend.email}</div> 
        </div>    
    )
}

export default Friend;