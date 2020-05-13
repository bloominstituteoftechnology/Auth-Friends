import React, { useState } from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

export const AddFriendForm = () => {
    const [addedFriend, setAddedFriend] = useState(false);
    const [inputs, setInputs] = useState({
        name: '',
        age: '',
        email: ''
    });

    const handleChanges = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setAddedFriend(true)
        axiosWithAuth()
            .post('http://localhost:5000/api/friends', inputs)
            .then(res => {
                console.log(res);
                setAddedFriend(false);
            })
            .catch(err => {
                console.log(err.response);
                setAddedFriend(false);
            });
        setInputs({
            name: '',
            age: '',
            email: ''
        });       
    };

return(
    <div>
        {
        addedFriend && (
            <div>
                Friend added successfully!
            </div>
        )
        }
        <form onSubmit={handleSubmit}>
            <input 
            type='text'
            name='name'
            placeholder='enter name'
            value={inputs.name}
            onChange={handleChanges}
            />
            
            <input 
            type='text'
            name='age'
            placeholder='enter age'
            value={inputs.age}
            onChange={handleChanges}
            />
           
            <input 
            type='email'
            name='email'
            placeholder='enter email'
            value={inputs.email}
            onChange={handleChanges}
            />
       
            <button type="submit">
                Submit
            </button>
        </form>
    </div>    
    );
};