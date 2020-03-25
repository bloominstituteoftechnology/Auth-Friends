import React from 'react';

const Friend = (props) => {
    return (
        <div className='friend'>
            <h2>{props.friend.name}</h2>
            <p className='age'>Age: {props.friend.age}</p>
            <p className='email'>{props.friend.email}</p>
            <button type='button' onClick={() => props.delete(props.friend.id)}>Delete</button>
            <button type='edit' onClick={() => props.edit(props.friend)}>Edit</button>
        </div>
    )
}

export default Friend;