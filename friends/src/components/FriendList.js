import React from 'react';
import PropTypes from 'prop-types';
import Friend from './Friend';

const FriendList = props => {
    return (
        <table>
            <thead>
                <tr>
                    <th> Name </th>
                    <th> Age </th>
                    <th> Email </th>
                    <th> Delete </th>
                    <th> Update </th>
                </tr>
            </thead>
            <tbody>
                {props.friends.map(friend => <Friend key={friend.id} friend={friend}/>)}
            </tbody>
        </table>
    );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            age: PropTypes.number.isRequired,
            email: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}

export default FriendList;

