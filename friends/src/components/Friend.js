import React from 'react';
const Friend = (props) => {
   return <div className="friend">
        <h1>{props.friend.name}</h1>
        <h3>{props.friend.age} - {props.friend.email}</h3>
    </div>
}

export default Friend;