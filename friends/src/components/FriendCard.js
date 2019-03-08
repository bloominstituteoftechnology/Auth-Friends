import React from 'react';

const FriendCard = props => {

    return (
        <div key={props.friend.id}>
            <h2>Name: {props.friend.name}</h2>
            <h3>Age: {props.friend.age}</h3>
            <h3>E-mail: {props.friend.email}</h3>
        </div>
    )

}

export default FriendCard;