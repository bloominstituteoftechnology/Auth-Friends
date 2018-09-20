import React from 'react';


function FriendsList(props) {
    if(!props.friendsList || !props.friendsList.length) {
        return <h1>No Friends :( </h1>
    }
    return (
        <div>
            {props.friendsList.map(friend => (
                <div key={friend.id}>
                    <h2>{friend.name}</h2>
                    <h3>{friend.age}</h3>
                    <h3>{friend.email}</h3>
                </div>
            ))}
        </div>
    );
}

export default FriendsList;