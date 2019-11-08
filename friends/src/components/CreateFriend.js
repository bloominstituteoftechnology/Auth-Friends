import React, { useState } from 'react';
import api from '../utils/api';


function CreateFriend(props) {
    const [error, setError] = useState()
    const [newFriend, setNewFriend] = useState({
        id: [],
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
                console.log(res.data)
                // props.history.push('/account')
            })
            .catch(error => {
                setError(error.res)
            })
    }

    return (
        <>
            <h1>Hello</h1>
        
        <form onSubmit={handleSubmit}>

            <input type='text' name='name' placeholder="Name" value={newFriend.name} onChange={handleChange} />
            <input type='number' name='age' placeholder="Age" value={newFriend.age} onChange={handleChange} />
            <input type='text' name='email' placeholder="Email" value={newFriend.email} onChange={handleChange} />

            <button type='submit'>Add Friend</button>
        </form>
        </>
    )
}

export default CreateFriend;
