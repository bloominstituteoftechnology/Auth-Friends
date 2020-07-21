import React, { useState, useEffect } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth';


const FriendsList = () => {

    const initialNewFriend = {
        name: '',
        age: '',
        email: ''
    }

    const [friends, setFriends] = useState([])
    const [newFriend, setNewFriend] = useState(initialNewFriend)

    useEffect(() => {
        axiosWithAuth()
        .get('/api/friends')
        .then(res => {
            setFriends(res.data)
        })
        .catch(error => {
            console.log('Error fetching friends', error)
        })
    }, [])

    const handleChanges = e => {
        setNewFriend({
            ...newFriend, 
            [e.target.name]: e.target.value})
    }

    const addFriend = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/api/friends', newFriend)
        .then(res => {
            setNewFriend(initialNewFriend)
            setFriends(res.data)
        })
        .catch(error => {
            console.log('there was an error', error)
        })
    }

    return (
        <div className='add-friend-form'>
            <form onSubmit={addFriend}>
                
                <input 
                type='text'
                name='name'
                value={newFriend.name}
                onChange={handleChanges}
                placeholder='Name'
                /><br />
                
                <input 
                type='number'
                name='age'
                value={newFriend.age}
                onChange={handleChanges}
                placeholder='Age'
                /><br />
                
                <input 
                type='text'
                name='email'
                value={newFriend.email}
                onChange={handleChanges}
                placeholder='Email'
                /><br/>
                <button>Add Friend</button>
            </form>
            
            <div className='friends-list'>
                <h2>My list of Friends</h2>
                {friends.map(friend => (

                    <div key={friend.id}>
                        <p>Name: {friend.name}</p>
                        <p>Age: {friend.age}</p>
                        <p>Email: {friend.email}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FriendsList
