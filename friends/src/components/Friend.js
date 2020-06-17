import React from 'react';

const Friend = (props) => {

    return (
        <div className='friend-container'>
            <p>Name: {props.friend.name}</p>
            <p>Age: {props.friend.age}</p>
            <p>Email: {props.friend.email}</p>
        </div>
    )

}

export default Friend;