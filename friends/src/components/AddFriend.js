import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const AddFriend = () => {

    const [newFriend, setNewFriend] = useState({
        name: '',
        age: '',
        email: ''
    })

    const handleChange = e => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        })
    }

    const submitFriend = e => {
        e.preventDefault();
        axiosWithAuth().post('/friends', newFriend)
        .then(res => {console.log(res)})
        .catch(err => console.log(err));
        setNewFriend({
            name: '',
            age: '',
            email: ''
        })
    }

    return (
        <form onSubmit={submitFriend}>
            <input type="text" name="name" placeholder="Enter name" onChange={handleChange} />
            <input type="text" name="age" placeholder="Enter age" onChange={handleChange} />
            <input type="email" name="email" placeholder="Enter email" onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
    )
}

export default AddFriend;