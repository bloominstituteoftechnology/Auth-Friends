import React from 'react';
import FriendsForm from './friendsForm';
import FriendsList from './friendsList';

const Friends = () => {

        return (
            <div>
                <div className = 'grid-2'>
                    <FriendsForm />
                    <FriendsList />
                </div>
            </div>
        )
    }

export default Friends;