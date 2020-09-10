import React from 'react';

const FriendCard = ({friend}) => {
    return(
        <div>
            <p>
                Name: {friend.name}
                <br />
                Age: {friend.age}
                <br />
                Email: {friend.email}
            </p>
        </div>
    );
};

export default FriendCard;