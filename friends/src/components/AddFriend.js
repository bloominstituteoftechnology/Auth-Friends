import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const AddFriend = props => {

const { name, age, email } = props

const [ form, setForm ] = useState({
    name: '',
    age: '',
    email: '',
    id: Date.now()
})

    const handleChange = e => {
        e.preventDefault()
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const addFriends = e => {
        axiosWithAuth()
        .post('/api/friends', form)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log('ERROR :', err)
        })
    }

        return(

            <div>
            <form onSubmit={addFriends}>

            <label>Name: </label>
            <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            />

             <label> Age: </label>
            <input
            type="text"
            name="age"
            value={age}
            onChange={handleChange}
            />

             <label> Email: </label>
            <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            />
            </form>
            <button>Add a Friend!</button>
            </div>
        )
    }
export default AddFriend