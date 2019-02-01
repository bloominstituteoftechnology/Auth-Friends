import React from 'react';

const Friends = props => {
    return (
        <div>
            <h2> {props.friend.name} </h2>
            <h4> {props.friend.age} </h4>
            <p>  {props.friend.email} </p>
        </div>
    )
}

export default Friends;


