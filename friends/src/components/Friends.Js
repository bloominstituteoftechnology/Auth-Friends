import React from "react";

const Friends = props => {
    return (
        <ul>
            {props.friends.map(friend => {
                return <li key={friend.id}>{friend.name} - {friend.age} - {friend.email}</li>
            })}
        </ul>)
}

export default Friends