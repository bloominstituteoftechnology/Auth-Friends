import React, { useState, useEffect } from 'react';
import AxiosWithAuth from '../utilz/AxiosWithAuth';



const FriendsList = () =>{
const [friends, setFriends] =useState({
    name: "",
    age: '',
    email: ""
})

useEffect(() => {
    AxiosWithAuth()
    .get('/friends')
    .then(res => {
        console.log(res.data)
    })
},[{friends}])
    


const handleChange = e => {
    setFriends({...friends, [e.target.name]: e.target.value})
}

const postFriend = e => {
    e.preventDefault();
    AxiosWithAuth()
    .post('/friends/', friends)
    .then(res => {
        console.log(res)
    })
    .catch(err => console.log(err))
}


    




    return(
        <form onSubmit={postFriend}>
        <input type="text" name="name" onChange={handleChange} placeholder="name" />
        <input type="text" name="age" onChange={handleChange} placeholder="age" />
        <input type="text" name="email" onChange={handleChange} placeholder="email"/>
        <button type="submit">Add Friend</button>
</form>

        
    )



}

export default FriendsList;