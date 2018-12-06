import React from 'react';

const Friend = props => {
    
    return <p id={props.friend.id}>{props.friend.name}</p>
}

export default Friend;