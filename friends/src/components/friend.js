import React from 'react';

const Friend = props => {
    return (
        <div>
            <h1> {props.friend.name}</h1>
            <h3>{props.friend.age}</h3>
            <p> {props.friend.email}</p>
        </div>
    )
}

export default Friend;