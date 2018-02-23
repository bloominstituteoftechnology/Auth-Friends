import React from 'react';
import { deleteFriend } from '../actions/actions';

const Friends = props => {
    return (
    <ul>
        {props.friends.map(friend => {
            return <li key = {friend}>
                        <div>{`Name: ${friend.name}`}</div>
                        <div>{`Age: ${friend.age}`}</div>
                        <div>{`Email: ${friend.email}`}</div>
                        <button onClick={() => onDelete}>Delete</button>
                    </li>;
        })}
    </ul>

    );
};

const onDelete = () => {
    this.props.deleteFriend();
};

export default Friends;