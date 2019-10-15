import React from 'react';

export default function FriendCard({friend}) {
    return (
        <div>
            {friend.name} is {friend.age} years old.
        </div>
    )
}