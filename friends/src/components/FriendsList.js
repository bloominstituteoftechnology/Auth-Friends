import React from 'react';
import FriendCard from './FriendCard';

const FriendsList = props => {
    return(
        <div className='friends-list'>
            {props.friends.friends.map((friend) => (
                <FriendCard 
                    key={friend.id}
                    friend={friend} 
                />
            ))}
        </div>
    );
}


export default FriendsList;