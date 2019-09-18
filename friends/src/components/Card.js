import React from 'react';

const Card = ({ friend }) => {
    return (
        <div>
            {friend.name} {friend.age} {friend.email}
        </div>
    );
};

export default Card;