import React, { useState, useEffect } from 'react';
import {AxiosWithAuth} from './AxiosWithAuth';

const Friends = () => {
    const [friends, setFriends] = useState([]);
    const [newFriend, setNewFriend] = useState({});

    useEffect(() => {
        AxiosWithAuth()
        .get('http://localhost:5020/api/friends')
        .then((res) => {
            console.log(res.data);
            setFriends(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    const addFriend = (e) => {
        e.preventDefault();
        console.log(newFriend);
        AxiosWithAuth()
        .post('http://localhost:5020/api/friends', newFriend)
        .then((res) => {
            console.log(res.data)
            setFriends(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const handleFormChange = (e) => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value,
        })
    }

    return(
        <div>
            <form onSubmit={addFriend}>
                <h1>Add Friend</h1>
            <input
            type="text"
            name="name"
            value={newFriend.name}
            onChange={handleFormChange}
          />
          <input
            type="text"
            name="age"
            value={newFriend.age}
            onChange={handleFormChange}
          />
            <input
            type="text"
            name="email"
            value={newFriend.email}
            onChange={handleFormChange}
          />
          <button>Add</button>
            </form>

            {friends.length !== 0 ? (
        <div>
          {friends.map((f) => (
            <div key={f.id}>
              <h3>Name: {f.name}</h3>
              <p>Email: {f.email}</p>
              <p>Age: {f.age}</p>
            </div>
          ))}
        </div>
      ) : null}
        </div>
    )
}

export default Friends;