import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const AddFriend = ({ updateFriends, isEditing, friendToEdit, setIsEditing }) => {
    const [friend, setFriend] = useState({
        name: "",
        age: 0,
        email: ""
    })

    useEffect(() => {
        if(isEditing === true) {
            setFriend(friendToEdit)
        }
    },[isEditing, friendToEdit])

    const handleInputChanges = e => {
        setFriend({...friend, [e.target.name]: e.target.value})
    }
    const handleSubmit = e => {
        e.preventDefault()
        isEditing ? 
        axiosWithAuth().put(`/friends/${friendToEdit.id}`, friend)
            .then(res => {
                updateFriends(res.data)
                setFriend({
                    name: "",
                    age: 0,
                    email: ""
                })
                setIsEditing(false)
            })
            .catch(err => console.log(err))
        : (axiosWithAuth().post('/friends', friend)
            .then(res => updateFriends(res.data))
            .catch(err => console.log(err)))
    }
    return (
        <form onSubmit={e => handleSubmit(e)}>
            <input placeholder="name" name="name" value={friend.name} onChange={e => handleInputChanges(e)}/><br/>
            <label>Age:</label><br/>
            <input type="number" name="age" value={friend.age} onChange={e => handleInputChanges(e)}/><br/>
            <input placeholder="email" name="email" value={friend.email} onChange={e => handleInputChanges(e)}/><br/>
            <button type="submit">{isEditing ? 'Finish Edit' : 'Add Friend'}</button>
        </form>
    )
}

export default AddFriend