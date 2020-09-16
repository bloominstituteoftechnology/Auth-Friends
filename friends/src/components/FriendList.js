import React, { useState, useEffect } from 'react'

import axiosWithAuth from '../utils/axiosWithAuth'

const intialFriends = []


const initialFormValues = {
    name: "",
    age: "",
    email: "",
}


const FriendsList = () => {
    const [ friends, setFriends ] = useState(intialFriends)
    const [ formValues, setFormValues] = useState(initialFormValues)

    

    useEffect( () => {
        axiosWithAuth()
        .get('/api/friends')
        .then(res => {
            console.log(res.data)
            setFriends(res.data)
        })
    }, [])

    const onFormChange = e => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault()
        axiosWithAuth()
        .post('/api/friends', newFriend)
        .then(res => {
            setFriends([
                ...friends, newFriend
            ])
        })
        .catch(err => {
            console.log(err, "You fool! You absolute buffoon!")
        })
        setFormValues(initialFormValues)
    }

    const newFriend = {
        ...formValues
    }

    return (
        <div className="friend-form-container">
        <section className="friends-container">
            <h1>My friends...</h1>
            {friends.map(friend => {
                return <h3 key={friend.id}>{friend.name}</h3>
            })}
        </section>
                <section className="form-section">
            <h1 className="form-heading">New Friend</h1>
            <form onSubmit={onSubmit} className="friend-form">
                <label className="form-label">Name:&nbsp;
                    <input 
                    name="name"
                    type="text"
                    value={formValues.name}
                    onChange={onFormChange}                    
                    />
                </label>
                <label className="form-label">Age:&nbsp;
                    <input 
                    name="age"
                    type="text"
                    value={formValues.age}
                    onChange={onFormChange}                      
                    />
                </label>
                <label className="form-label">Email:&nbsp;
                    <input 
                    name="email"
                    type="text"
                    value={formValues.email}
                    onChange={onFormChange}                      
                    />
                </label>
                <button className="submit">Submit</button>
            </form>
        </section>
        </div>
    )
}

export default FriendsList