import { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import FriendCard from './FriendCard';

const FriendsDash = () => {

    const [friends, setFriends] = useState([])

    const getFriends = () => {
        axiosWithAuth().get('/api/friends')
            .then(res => {
                setFriends(res.data);
            })
            .catch(err => console.log(err))
    };

    useEffect(() => {
        getFriends();
    }, [])

    return(
        <div>
            {friends.map((friend) => {
                return <FriendCard key={friend.id} friend={friend} />
            })}
        </div>
    )
}

export default FriendsDash