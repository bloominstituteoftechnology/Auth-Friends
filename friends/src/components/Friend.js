import React from 'react';
import '../App.css';

const Friend = props => {
    return (
        <div className="friend">
            {props.friend.name}
        </div>
    );
};

export default Friend;