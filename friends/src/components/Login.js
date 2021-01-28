import React, { useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

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

    const login = (e) => {
        e.preventDefault()
        console.log('clicked')
        // axios
        axios.post('http://localhost:5000/api/login', formValue)
        .then(res => 
            // res.data.payload
            localStorage.setItem('token', res.data.payload),
            push('/friends')
            // console.log(res)
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
                type='password'
                onChange={handleChange}
                value={formValue.password}
                />
                <button onSubmit={login}>Submit</button>
            </form>
        </div>
    )
}

export default Login