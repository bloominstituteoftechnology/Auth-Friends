import React from 'react';

export default function FriendList(props) {
    return (
        <div className="App">
              {props.friends.map(friend => (
                    <div key={friend.name}>
                        <div>{friend.name}</div>
                        <div>{friend.age}</div>
                        <div>{friend.email}</div>
                    </div>
              ))}
        </div>
    );
}