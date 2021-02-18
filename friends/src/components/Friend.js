import React from 'react';

const Friend = (props) => {
    const handleClick = e => {
        e.preventDefault();
        props.toggleSelected();
    }

    return (
        <div className="friend-card">
            <header className="friend-name">
                <h3>{props.friend.name}</h3>
            </header>
            <div className="friend-info">
                <h4 className="age-label">Age</h4><p>{props.friend.age}</p>
                <h4 className="email">E-Mail</h4><p>{props.friend.email}</p>
            </div>
            <div onClick={handleClick}>
                Select
            </div>
        </div>
    )
};

export default Friend;