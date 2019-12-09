import React, { useState, useEffect} from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth';
import Friends from './Friends';
import FriendForm from './FriendForm';

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get('/friends')
      .then(res => {
        console.log(res.data);
        setFriends(res.data);
      })
      .catch(err => console.log(err))
  }, []);
  
  return (
    <div>
      <h3>Add New Friend</h3>
      <FriendForm />
      <h3>You have {friends.length} friends!</h3>
      <div className="cards">
        {friends.map(friend => (
          <Friends key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
}

export default FriendsList;