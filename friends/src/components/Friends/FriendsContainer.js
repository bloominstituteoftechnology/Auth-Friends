import React from 'react';
import FriendsList from './FriendsList';
import FriendsForm from './FriendsForm';

const FriendsContainer = (props) => {
    return ( 
        <div>
            <FriendsList />
            <FriendsForm />
        </div>
     );
}
 
export default FriendsContainer;