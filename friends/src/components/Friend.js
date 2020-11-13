import React from 'react';
import { Link } from 'react-router-dom';

export default function Friend({ friend, deleteFriend }) {
    return(
        <div>
            <Link to={`/friends/${friend.id}`}>
                <h3>Name: {friend.name}</h3>
            </Link>
            <h5>Age: {friend.age}</h5>
            <h6>Email: {friend.email}</h6>
            <button onClick={() => deleteFriend(friend.id)}>Delete</button>
        </div>
    );
};