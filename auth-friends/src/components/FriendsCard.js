import React from 'react';

const FriendsCard = (props) => {
    return (
        <div>
            {props.friends.map(friend => {
                return (
                    <div>
                        <h2>{friend.name}</h2>
                        <p>Age: {friend.age}</p>
                        <p>Email: {friend.email}</p>
                    </div>
                );
            })};
        </div>
    );
};

export default FriendsCard;