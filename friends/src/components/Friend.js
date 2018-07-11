import React from 'react';

const Friend = props => {
    return (
        <div>
           <h2> {props.friend.name}</h2>
           <p> {props.friend.age}</p>
            <p>{props.friend.email}</p>
            <button>Edit</button>
            <button>Delete</button>
        </div>

    )
}

export default Friend;