import React, {useState} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialState = {
    name: '',
    age: '',
    email: ''
}

function AddFriends(props) {

    const [friend, setFriend] = useState(initialState)

    const handleChange = event => {
        setFriend({...friend, [event.target.name]: event.target.value,})
    }

    const addFriend = event => {
        event.preventDefault();
        axiosWithAuth()
        .post('/api/friends', friend)
        .then(res => {
            console.log('response: ', res);
            localStorage.setItem('token', res.data.payload);
            setFriend(res.data)
            // props.newFriend(friend);
        })
        .catch(err=> {
            console.log('error: ', err)
        })
    }

    return (
        <div className='addFriend'>
            <form onSubmit={addFriend}>
                <br></br><label>Name: </label>
                <input
                    type='text'
                    name='name'
                    placeholder='Name'
                    value={friend.name}
                    onChange={handleChange}
                />
                <label>Age: </label>
                <input
                    type='number'
                    name='age'
                    placeholder='Age'
                    value={friend.age}
                    onChange={handleChange}
                />
                <label>Email: </label>
                <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={friend.email}
                    onChange={handleChange}
                />
                <button disabled={!friend} type='submit'>Add</button>
            </form>
        </div>
    )
}

export default AddFriends
