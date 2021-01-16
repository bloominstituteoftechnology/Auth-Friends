import axios, {useState} from 'axios';
import React from 'react';
import {Button} from "@material-ui/core";
import AxiosWithAuth from "../utils/AxiosWithAuth";

function AddFriend(props) {

    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
    const [email, setEmail] = useState("")

    const [error, setError] = useState("")

    function addFriendHandler(e) {
        e.preventDefault();
        AxiosWithAuth().post("/friends", {
            id: Date.now(),
            name,
            age,
            email
        })
        .then(res => console.log(res.data))
        .catch(err => setError(err.message))

        props.history.push("/friends-list")
    }
    return (
        <div className="addFriend">
            {error 
            ? <div className="error-box">{error}</div>
            : ""
            }
            <form onSubmit={addFriendHandler}>
                <label htmlFor="name">Name:</label>
                <input id="name" required onChange={(e) => setName(e.target.value)}/>
                <label htmlFor="age">Age:</label>
                <input id="age" required onChange={(e) => setAge(e.target.value)}/>
                <label htmlFor="email">Email:</label>
                <input id="email" required onChange={(e) => setEmail(e.target.value)}/>
                <Button type="submit">Add Friend</Button>
            </form>
            
        </div>
    )
}

export default AddFriend
