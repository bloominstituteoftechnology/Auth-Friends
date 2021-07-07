import React, { useState,useEffect } from "react";

import {axiosWithAuth} from '../api/axiosWithAuth'
import axios from "react"

const NewFriendForm = () => {
    
    const [input, setInput] = useState({
        name:'',
        age:'',
        email:'',
    })

     const handleFormChange = e => {
        console.log()
        setInput({
                ...input,
                [e.target.name]: e.target.value
            })   
    }

 
    

    const postFriend = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/friends', input)
            .then(addedFriend => {
                console.log(addedFriend)
            })
            .catch(err => {
                console.log('Post error', err)
            })
            .finally(() => {
        
                setInput({
                    name:'',
                    age:'',
                    email:'',
                    
                })
                console.log(input)
               
            })
           
    }
 return(
        <div className='add-friend'>
            <form onSubmit={(e) => postFriend(e)}>
                <label>Name:&nbsp;</label>
                <input
                    name='name'
                    value={input.name}
                    onChange={(e) => handleFormChange(e)}
                />
                <label>Age:&nbsp;</label>
                <input
                    name='age'
                    value={input.age}
                    onChange={(e) => handleFormChange(e)}
                />
                <label>Email:&nbsp;</label>
                <input
                    name='email'
                    value={input.email}
                    onChange={(e) => handleFormChange(e)}
                />
                <button type='submit'>Add Friend</button>
            </form>
        </div>
    )
}
export default NewFriendForm