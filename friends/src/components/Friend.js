import React from 'react';
import '../App.css';

const Friend = props => {
    return (
        <div className="friend">
            {props.friend.name}
            <div>
                <button>Edit</button>
                <button onClick={() => props.handleDelete(props.friend.id)}>Delete</button>
            </div>
        </div>
    );
};

export default Friend;