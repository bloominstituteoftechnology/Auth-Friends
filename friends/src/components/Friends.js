import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Friends = () => {

    const [friends, setFriends] = useState({friends: []});
    const [newFriend, setNewFriend ] = useState({id: "", name: "", age: "", email: ""})

    useEffect(() => {
        getFriends();
    }, [])
            

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth().post("/friends", newFriend)
            .then(res => {

                getFriends();
            }
            )
            .catch(res => console.log(res))

    }

    const getFriends = () => {
    
        axiosWithAuth().get("/friends")
            .then(res => setFriends({friends: res.data}))
            .catch(err => console.log(err));

    }

    const handleChange = e => {
        setNewFriend({...newFriend, [e.target.name]: e.target.value});



    }



    return (
        <>
        <h3>Yay!!! Friends page!!!</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="name" value={newFriend.name} onChange={handleChange}/>
            <input type="text" name="age" placeholder="age" value={newFriend.age} onChange={handleChange}/>
            <input type="text" name="email" placeholder="email" value={newFriend.email} onChange={handleChange}/>
            <button>addFriend</button>
        </form>
        {friends.friends.map(friend =><h1 key={friend.id}>{friend.name}</h1>)}  
        </>
    )
}

export default Friends;