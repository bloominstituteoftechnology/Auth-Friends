import React, {useState} from 'react';
import {Button} from "@material-ui/core";
import AxiosWithAuth from "../utils/AxiosWithAuth";
import Header from "./Header";

function AddFriend(props) {

    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
    const [email, setEmail] = useState("")

    const [error, setError] = useState("")

    const token = localStorage.getItem("token");

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
            <Header />
            {token 
            ? <div className="form">
            <form onSubmit={addFriendHandler}>
            <label htmlFor="name">Name:</label>
            <input id="name" required onChange={(e) => setName(e.target.value)}/>
            <label htmlFor="age">Age:</label>
            <input id="age" required onChange={(e) => setAge(e.target.value)}/>
            <label htmlFor="email">Email:</label>
            <input id="email" required onChange={(e) => setEmail(e.target.value)}/>
            <Button type="submit">Add Friend</Button>
        </form></div>
            : <div className="error-box"><h1>You Must Sign In First</h1></div>
            }
            
            
        </div>
    )
}

export default AddFriend
