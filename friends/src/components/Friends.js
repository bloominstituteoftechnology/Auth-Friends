import React from 'react';

const Friends = props => {
    return (
        <div className= 'infoCard'>
            <h2> {props.friend.name} </h2>
            <h4> age: {props.friend.age} </h4>
            <p> Email: {props.friend.email} </p>
        </div>
    )
}

export default Friends;


