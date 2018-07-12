import React from 'react';
import '../App.css';

const Friend = props => {
    return (
        <div className="friend">
            <div>{props.friend.name}</div>
            <div>{props.friend.age}</div>
            <div>{props.friend.email}</div>
            <div>
                <button onClick={() => props.handleUpdate(props.friend.id)}>Edit</button>
                <button onClick={() => props.handleDelete(props.friend.id)}>Delete</button>
            </div>
        </div>
    );
};

export default Friend;