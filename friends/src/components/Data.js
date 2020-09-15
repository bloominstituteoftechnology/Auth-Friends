import React, {useState, useEffect} from 'react'
import FriendsList from './FriendsList'

import {axiosWithAuth} from '../utils/axiosWithAuth'

const Data = () => {
    const [friends, setFriends] = useState([])
    const getData = (e) => {
        e.preventDefault();
        axiosWithAuth()
          .get('/api/friends')
          .then(res => {
            setFriends(res.data)
          })
          .catch(err => console.log(err));
      };

    





    return (
        <div className='data'>
            <button onClick={getData}>Fetch Data!</button>
            <div className="results">
                {friends.map(friend =>(
                    <FriendsList key={friend.id} friend={friend} />
                ))}
            </div>
        </div>
    )
}


export default Data;
