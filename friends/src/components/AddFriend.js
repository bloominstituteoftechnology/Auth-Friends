import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'


const initialState = {
    id: '',
    name: '',
    age: '',
    email: ''
}

const AddFriend = props => {
const [newFriend, setNewFriend ] = useState(initialState)

    const handleChange = e => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        axiosWithAuth()
        .post('/api/friends', newFriend)
        .then(res => {
            props.handleSubmit(res)
            setNewFriend(initialState)
        })
        .catch(err => {
            console.log('ERROR :', err)
        })
    }

        return(

            <div>
            <form onSubmit={handleSubmit}>

            <label>Name: </label>
            <input
            id="name"
            type="text"
            name="name"
            value={newFriend.name}
            onChange={handleChange}
            />

             <label> Age: </label>
            <input
            id="age"
            type="text"
            name="age"
            value={newFriend.age}
            onChange={handleChange}
            />

             <label> Email: </label>
            <input
            id="email"
            type="text"
            name="email"
            value={newFriend.email}
            onChange={handleChange}
            />
            </form>
            <button type="submit">Add a Friend!</button>
            </div>
        )
    }
export default AddFriend