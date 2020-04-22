import React from 'react';

const Friend = ({friend}) => {
    return(
        <div className='box friend'>
            <div className='title is-4'>{friend.name}</div>
            <div>Age: {friend.age}</div>
            <div>Email: {friend.email}</div>

        </div>
    )
}

export default Friend;