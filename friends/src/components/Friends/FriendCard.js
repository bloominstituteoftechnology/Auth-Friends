import React from 'react';

import EditFriend from '../Forms/EditFriend';

const FriendCard = props => {
    return (
        <table>
            <tbody>
                <tr>
                    <td>{props.friend.id}</td>
                    <td>{props.friend.name}</td>
                </tr>
                <tr>
                    <td>{props.friend.email}</td>
                </tr>
                <tr>
                    <td>
                        <EditFriend type='Edit Friend'/>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default FriendCard;