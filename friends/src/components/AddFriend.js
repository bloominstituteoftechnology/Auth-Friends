import React, { useState } from 'react';
import { axiosWithAuth } from '../utils';

const AddFriend = () => {
const [friend, setFriend] = useState({
    name:'',
    age:'',
    email:''
})

const handleChange = (e) => {
    e.preventDefault();
    setFriend({
        ...friend,
        [e.target.name]: e.target.value
    })
}

const postFriend = () => {
    let whatever = {...friend}
    axiosWithAuth()
    .post('http://localhost:5000/api/friends', whatever)
    .then(res => {
        console.log(res);
        setFriend({
            name:'',
            age:'',
            email:''
        })
    })
    .catch(err => {
        console.log('your post request left something to be desired, sire', err)
    })
}

    return(
        <>
            <form onSubmit={postFriend}>
                <label>Friend's Name:</label> <br/>
                <input type='text' name="name" value={friend.name} onChange={handleChange}/><br/>
                <label>Friend's Age:</label><br/>
                <input type='number' name="age" value={friend.age} onChange={handleChange}/><br/>
                <label>Friend's email:</label><br/>
                <input type="email" name="email" value={friend.email} onChange={handleChange}/><br/>
                <button type='submit'>Submit Friend</button>
            </form>
        </>
    ); 
}

export default AddFriend
