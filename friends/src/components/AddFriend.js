import React, {useState} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const AddFriends = () => {
    const [newFriend, setNewFriend] = useState({
        name:'',
        age:'',
        email:'',
        id: Date.now()
    })

    const handleChanges = e => {
        setNewFriend({
            ...newFriend, [e.target.name]: e.target.value
        })
    }

    const postFriend = (formData) => {
        axiosWithAuth()
        .post('/api/friends', formData)
        .then(res => {console.log('Adding new friend', res)})
        .catch(err => {console.log('Failed to Add', err)})
    }

    return (
        <div>
            <input
            type='text'
            name='name'
            value={newFriend.name}
            onChange={handleChanges}
            placeholder= 'Name'
            />
            <input
            type='text'
            name='age'
            value={newFriend.age}
            onChange={handleChanges}
            placeholder= 'Age'
            />
            <input
            type='text'
            name='email'
            value={newFriend.email}
            onChange={handleChanges}
            placeholder= 'Email'
            />
            <button onClick={() => postFriend(newFriend)}>Add New Friend</button>
        </div>
    )
}


export default AddFriends;