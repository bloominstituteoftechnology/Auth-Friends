import React from 'react';

const Friend = props => {
    return(
        <div>
            <h3>{props.friend.name}</h3>
            <p>{props.friend.age}</p>
            <p>{props.friend.email}</p>
        </div>
    )
}

export default Friend;