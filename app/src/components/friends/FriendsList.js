import React, { useState, useEffect } from 'react';
import Form from './Form';
import Friend from './Friend';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

const FriendsList = (props) => {
  const [friendsList, setFriendsList] = useState([]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    getData();
  }, [update]);

  const getData = () => {
    axiosWithAuth()
      .get('http://localhost:5000/api/friends')
      .then(res => {
        setFriendsList(res.data)
      })
      .catch(err => console.log(err.response));
  };

  const deleteFriend = (id) => {
    axiosWithAuth()
      .delete(`http://localhost:5000/api/friends/${id}`)
      .then(res => {
        setUpdate(!update)
      })
      .catch(err => console.log(err.response));
  }

  const editFriend = (id, values) => {
    axiosWithAuth()
      .put(`http://localhost:5000/api/friends/${id}`, values)
      .then(res => {
        setUpdate(!update)
      })
      .catch(err => console.log(err.response));
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Form setUpdate={setUpdate} update={update}/>
      <div>
        {friendsList.map(friend => {
          return <Friend friend={friend} key={friend.id} deleteFriend={deleteFriend} editFriend={editFriend}/>
        })}
      </div>
    </div>
  )
}

export default FriendsList;