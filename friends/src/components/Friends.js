import React from 'react';

const Friends = props => {
    return(
        <ul>
            {props.friends.map(friend => {
                return (
                    <div key={friend.id}>
                        <h2>{friend.name}</h2>
                        <p><strong>Age:</strong> {friend.age}</p>
                        <p><strong>Email:</strong> {friend.email}</p>
                        <button >Delete</button>
                    </div>
                )
            })}
        </ul>
    );
}
export default Friends;