import React from 'react';
import Friend from './Friend';

const FriendsList = (props) => {
    return (
        <div>
            
            <ul>
            {props.friends.map(friend => {
              return <Friend {...friend} key = {friend.id} />
            })}

          </ul>

        </div>
    )
}

export default FriendsList;