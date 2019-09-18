import React from 'react';

const Card = ({ friend, deleteFriend }) => {
    return (
        <div>
            {friend.name} {friend.age} {friend.email}
            <button onClick={() => deleteFriend(friend.id)}>Delete</button>
        </div>
    );
};

export default Card;