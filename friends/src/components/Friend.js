import React from 'react';

const Friend = props => {
    return (
        <div className='friend'>
             <h2>{props.friend.name}, {props.friend.age}</h2>
             <p>{props.friend.email}</p>
             <div className='delete' onClick={() => props.deleteHandler(props.friend.id)}>✖</div>
        </div>
    )
}
 
export default Friend;