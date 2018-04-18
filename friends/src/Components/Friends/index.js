import React from 'react';

export default (props) => {
    return (
        <div>
            {props.friends.map(friend => {
                return (
                    <div key={friend.id}>
                        <h1>{friend.name}</h1>
                        <strong>{friend.age}</strong>
                        <p>{friend.email}</p>
                    </div>)
            })}
        </div>
    );
};