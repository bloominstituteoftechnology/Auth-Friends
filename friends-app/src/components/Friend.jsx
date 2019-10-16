import React from 'react';

const Friend = props => {
    return(
        <div className={`friend-info friend-${props.friend.id}`}>
            <h3>{props.friend.name}</h3>
            <p>Friend ID: {props.friend.id}</p>
            <p>Age: {props.friend.age}</p>
            <p>Email: {props.friend.email}</p>
        </div>
    )
}

export default Friend