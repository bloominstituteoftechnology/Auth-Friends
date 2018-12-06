import React from 'react';

const FriendsList = (props) => {

    return (
        <div>
            {props.friends.map(friend => {
                return (
                    <div key={friend.id}>
                        <div>{friend.name}</div> 
                        <div>Age: {friend.age}</div> 
                        <div>Email: {friend.email}</div> 
                    </div>
                );
            })}
        </div>
    );
}

export default FriendsList;