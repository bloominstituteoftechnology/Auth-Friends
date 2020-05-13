import React, { useState } from 'react'
import { axiosWithAuth } from '../util/axiosWithAuth'

const AddFriend = () => {
    const [newFriend, setNewFriend] = useState({
        name: '',
        age: '',
        email: ''
    })


    const handleChange = (e) => {
        e.preventDefault()
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axiosWithAuth()
            .post("/api/friends", newFriend)
            .then(response => {
            console.log(response)
            setNewFriend({name: '', age: '', email: ''})
            window.location.reload()
            })

    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                name='name'
                id='name'
                placeholder='Name'
                onChange={handleChange}
                value={newFriend.name}
                required
            />
            <input 
                type='number'
                name='age'
                id='age'
                placeholder='Age'
                onChange={handleChange}
                value={newFriend.age}
                required
            />
            <input 
                type='email'
                name='email'
                id='email'
                placeholder='Email Adress'
                onChange={handleChange}
                value={newFriend.email}
                required
            />
            <button type='submit'>Add Friend</button>
        </form>
    )
}

export default AddFriend