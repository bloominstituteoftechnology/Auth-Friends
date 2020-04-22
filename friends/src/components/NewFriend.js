import React, {useState} from 'react';
import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';


const NewFriend = (props) => {
    const [newFriend, setNewFriend] = useState({
        name: '',
        age: '',
        email: ''
    })

    const addFriend = (friend) => {
       axiosWithAuth()
            .post('/api/friends', friend)
            .then(response => {console.log(response)})
            .catch(error => console.log(error))
    }

    const handleSubmit = e => {
            e.preventDefault();
            addFriend(newFriend);
            console.log(newFriend);
            setNewFriend({
                name: '',
                age: '',
                email: ''
            })
        }

        const handleChange = e => {
            e.preventDefault();
            setNewFriend({
                ...newFriend,
                [e.target.name] : e.target.value})
        }
    return(
        <div className='new-friend'>
            <div className='title is-3'>New Friend Form</div>
            <form className='form' onSubmit={handleSubmit}>
                <input className='input'
                    type='text'
                    name='name'
                    onChange={handleChange}
                    value={newFriend.name}
                    placeholder='Name'
                    />
                     <input className='input'
                    type='text'
                    name='age'
                    onChange={handleChange}
                    value={newFriend.age}
                    placeholder='Age'
                    />
                     <input className='input'
                    type='text'
                    name='email'
                    onChange={handleChange}
                    value={newFriend.email}
                    placeholder='Email'
                    />
                    <button className='button' type='submit'>Add to Friends</button>

            </form>
        </div>
    )
};

export default NewFriend;