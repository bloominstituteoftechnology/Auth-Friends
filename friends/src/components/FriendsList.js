import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import FriendsCard from './FriendsCard';

const FriendsList = props => {

    const [name, setName] = useState([]);


    useEffect(() => {
        // call withAuth fn >> find endpoint of /friends >> udpate state to the response
        axiosWithAuth().get('/friends')
        .then(res => setName(res.data))
        .catch()
    }, [])


    return (
        <div className="friendList">
            {/* map thru state >> find a friend >> return our Friend card component */}
            {name.map(friend => {
                return <FriendsCard key={friend.id} friend={friend} />
            })}
        </div>
    )
}

export default FriendsList;
