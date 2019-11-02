import React, { useState } from 'react';
import api from '../utils/api';


function CreateFriend(props) {
    const [error, setError] = useState()
    const [newFriend, setNewFriend] = useState({
        name: '',
        age: '',
        email: '',
    })

    const handleChange = (event) => {
        setNewFriend({
            ...newFriend,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        api().post("/api/friends", newFriend)
            .then(res => {
                localStorage.setItem('token', res.newFriend.payload)
                props.history.push('/account')
            })
            .catch(err => {
                setError(err.res, newFriend.msg)
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            {error && <div className='error'>{error}</div>}
            <input type='text' name='name' placeholder="Name" value={status.name} onChange={handleChange} />
            <input type='number' name='age' placeholder="Age" value={status.age} onChange={handleChange} />
            <input type='text' name='email' placeholder="Email" value={status.email} onChange={handleChange} />

            <button type='submit'>Login</button>
        </form>
    )
}

export default CreateFriend;
