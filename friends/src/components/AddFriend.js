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
    setFormValues({
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
                <label>Friend's Name:</label>
                <input type='text' name="name" value={friend.name} onChange={handleChange}/>
                <label>Friend's Age:</label>
                <input type='number' name="age" value={friend.age} onChange={handleChange}/>
                <label>Friend's email:</label>
                <input type="email" name="email" value={friend.email} onChange={handleChange}/>
                <button type='submit'>Submit Friend</button>
            </form>
        </>
    ); 
}

export default AddFriend
