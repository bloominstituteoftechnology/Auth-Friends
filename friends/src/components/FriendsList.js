import React, { useState, useEffect } from 'react';
import AxiosWithAuth from '../utilz/AxiosWithAuth';



const FriendsList = () =>{
    const[friends, setFriends] =useState([])
const [newFriends, setNewFriends] =useState({
    name: "",
    age: '',
    email: ""
})

const postFriend = e => {
    e.preventDefault();
    AxiosWithAuth()
    .post('/friends', newFriends)
    .then(res => {
        // console.log("post res.data",res.data)
             
    })
    
    .catch(err => console.log(err))
}

const handleChange = e => {
    setNewFriends({...newFriends, [e.target.name]: e.target.value})
}

useEffect(() => {
    AxiosWithAuth()
    .get('/friends')
    .then(res => {
        //  console.log("get res.data",res)   
        setFriends(res.data)         
    })
    .catch(err => console.log(err))
},[handleChange])
    






    return(
        <>
        <div>
            <form onSubmit={postFriend}>
            <input type="text" name="name" onChange={handleChange} placeholder="name" />
            <input type="text" name="age" onChange={handleChange} placeholder="age" />
            <input type="text" name="email" onChange={handleChange} placeholder="email"/>
            <button type="submit">Add Friend</button>
                </form>   
        </div>
        <div>
            {friends.map((friend) => {
                return(
                <div>
                <p>{friend.name}</p>
                <p>{friend.age}</p>
                <p>{friend.email}</p>
                </div>
                )
            })}

        </div>
        </>
        

        
    )



}

export default FriendsList;