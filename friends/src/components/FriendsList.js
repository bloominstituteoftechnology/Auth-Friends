import React, { useState } from 'react';


const FriendsList = () =>{
const [friends, setFriends] =useState({
    id: '',
    name: "",
    age: '',
    email: ""
})

const handleChange = e => {
    setFriends({...friends, [e.target.name]: e.target.value})
}
    return(
        <form>
        <input type="text" name="name" onChange={handleChange} placeholder="name" />
        <input type="text" name="age" onChange={handleChange} placeholder="age" />
        <input type="text" name="email" onChange={handleChange} placeholder="email"/>
        <button type="submit">Add Friend</button>
</form>
    )



}

export default FriendsList;