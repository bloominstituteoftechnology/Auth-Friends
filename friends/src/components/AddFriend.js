import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const AddFriend = props => {
    const [data, setData] = useState({
        name: '',
        email: '',
        age: '',
        id: Date.now()
    });

    const handleChange = e => {
        e.preventDefault();
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth().post('http://localhost:5000/api/friends', data)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <form className='add-friend-form' onSubmit={handleSubmit}>
            <input onChange={handleChange} name='name' value={data.name} placeholder='Name' />
            <input onChange={handleChange} name='email' value={data.email} placeholder='Email' />
            <input onChange={handleChange} name='age' value={data.age} placeholder='Age' />

            <button>Add</button>
        </form>
    )
}

export default AddFriend;