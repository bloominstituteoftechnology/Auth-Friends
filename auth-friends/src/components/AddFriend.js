import React, { useState } from "react"
import {axiosWithAuth} from "../utils/axiosWithAuth"

const AddFriend = props => {
    const [newFriend, setNewFriend] = useState({
        name: "",
        age: "",
        email: ""
    })

    const add = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("/friends", newFriend)
                .then(res => {
                    console.log(res)
                    props.history.push("/friends")
                })
                .catch(err => console.log(err))
    }

    const handleChange = e => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        })
    }
    return (
        <form className="login-form" onSubmit={add}>
            <input
                className="login input"
                placeholder="Name"
                name="name"
                value={newFriend.name}
                onChange={handleChange}
            />
            <input
                className="login input"
                placeholder="Age"
                name="age"
                value={newFriend.age}
                onChange={handleChange}
            />
            <input
                className="login input"
                placeholder="Email"
                name="email"
                value={newFriend.email}
                onChange={handleChange}
            />
            <button type="submit" className="login button">Add</button>
        </form>
    )

}

export default AddFriend;