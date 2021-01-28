import React, { useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth'

const initialFormValues = {
    username: '',
    password: ''
}
const Login = () => {
    const { push } = useHistory()
    const [formValue, setformValue] = useState(initialFormValues)
    
   const handleChange = (e) => {
       setformValue({
           ...formValue,
                [e.target.name]: e.target.value
       }
        )
        console.log(formValue)
    }

    // Post formValues to api
    // If successful .then will recieve token from api representing successful login
    // We will store that token in local storage and push the user to url ending in /friends
    const login = (e) => {
        e.preventDefault()
        console.log('clicked')
        // axios
        axiosWithAuth()
        .post('/login', formValue)
        .then(res => 
            localStorage.setItem('token', res.data.payload),
            push('/friends')
            )
        .catch(err => console.log(err))
    }
    
    return (
        <div>
            <form onSubmit={login}>
                <label htmlFor='username'>
                    Username
                </label>
                <input 
                type='text'
                name='username'
                id='username'
                onChange={handleChange}
                value={formValue.username}
                />
                <label htmlFor='password'>
                    Password
                </label>
                <input
                name='password'
                id='password'
                type='text'
                onChange={handleChange}
                value={formValue.password}
                />
                <button onSubmit={login}>Submit</button>
            </form>
        </div>
    )
}

export default Login