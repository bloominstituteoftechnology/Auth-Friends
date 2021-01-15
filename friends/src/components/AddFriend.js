import axios, {useState} from 'axios';
import React from 'react';
import Button from "@material-ui/core";

function AddFriend() {

    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
    const [email, setEmail] = useState("")

    const [error, setError] = useState("")

    const addFriendHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/friends", {
            id: Date.now(),
            name,
            age,
            email
        })
        .then(props.history.push("/friends-list"))
        .catch(err => setError(err.message))
    }
    return (
        <div className="addFriend">
            {error 
            ? <div className="error-box">{error}</div>
            : ""
            }
            <form onSubmit={addFriendHandler}>
                <label htmlFor="name">Name:</label>
                <input id="name" type="text" required />
                <label htmlFor="age">Age:</label>
                <input id="age" type="number" required />
                <label htmlFor="email">Email:</label>
                <input id="email" type="text" required />
                <Button type="submit">Add Friend</Button>
            </form>
            
        </div>
    )
}

export default AddFriend
