import React, { useState } from 'react'
import axiosWithAuth from '../axios/index';


function AddFriend () {
    const [name, setName] = useState('')
    const [age, setAge] = useState();
    const [email, setEmail] = useState('');


    const addFriend = () => {
        axiosWithAuth()
        .post('/friends', newFriend)
        .then(res => console.log(res))
        .catch(err => console.log('post error', err.response))
    }

    const newFriend = {
        id: Date.now(),
        name: name,
        age: age,
        email: email
    }

    const handleNameChange = e => {
        setName(e.target.value)
    }

    const handleAgeChange = e => {
        setAge(e.target.value)
    }

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }

   
  

    return (
      <div>
        <form onSubmit={addFriend}>
                <input type="text" value={name} onChange={handleNameChange} placeholder="Name" />
                <input type="number" value={age} onChange={handleAgeChange} placeholder="Age" />
                <input type="email" value={email} onChange={handleEmailChange} placeholder="Email" />
                <button type="submit">Add Friend</button>
            </form>
        </div>
     
    );
};

export default AddFriend;