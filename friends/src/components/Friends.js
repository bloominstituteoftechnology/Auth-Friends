import React from 'react';


const Friends = props => {
    return (
    <ul>
        {props.friends.map(friend => {
            return <li key = {friend}>
                        <div>{`Name: ${friend.name}`}</div>
                        <div>{`Age: ${friend.age}`}</div>
                        <div>{`Email: ${friend.email}`}</div>
                    </li>;
        })}
    </ul>

    );
};



export default Friends;