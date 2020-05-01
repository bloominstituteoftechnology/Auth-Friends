import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import FriendsList from "./FriendsList";

const AddFriend = props => {
    const [friend, setFriend] = useState({
        name: "",
        age: "",
        email: ""
    });
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        const fetchFriends = () => {
            axiosWithAuth().get('/api/friends')
                .then(res => {
                    setFriends(res.data);
                })
                .catch(err => console.log(err))
        }
        fetchFriends();
    }, [])

    const addFriend = banana => {
        axiosWithAuth()
        .post(
            "/api/friends", banana
            )
        .then(
            res => {
                console.log(res)
            })
        .catch(
            error => 
                console.log(error)
        )
    }

    function handleChange(e) {
        setFriend({
            ...friend,
            [e.target.name] : e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        addFriend(friend);
        setFriend({
            name: "",
            age: "",
            email: ""
        })
    }

    return(
        <div>
            <h2>Add Friend</h2>
            <form onSubmit={handleSubmit}>

                <h3>Name</h3>
                <input type="text" placeholder="Enter Name" name="name" onChange={handleChange} value={props.name} />

                <h3>Age</h3>
                <input type="text" placeholder="Enter Age" name="age" onChange={handleChange} value={props.age} />

                <h3>Email</h3>
                <input type="text" placeholder="Enter Email" name="email" onChange={handleChange} value={props.email} />1

                <button>Add Friend</button>
            </form>

            <FriendsList friends={friends}/>
        </div>
    )

}

export default AddFriend;