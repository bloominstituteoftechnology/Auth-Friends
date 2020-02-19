import React, { useState } from 'react'

import { useHistory } from 'react-router-dom'

import axios from 'axios'

const LoginForm = () => {
    const history = useHistory()

    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    })

    const handleInputChange = e => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const handleOnSubmit = e => {
        e.preventDefault()
        axios.post('http://localhost:5000/api/login', credentials)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                history.push('/friends');
            })
            .catch(err => console.log(err))
    }
    return (
        <form onSubmit={e => handleOnSubmit(e)}>
            <input name="username" value={credentials.username} onChange={e => handleInputChange(e)}/>
            <input type="password" name="password" value={credentials.password} onChange={e => handleInputChange(e)}/>
            <button>Login</button>
        </form>
    )
}

export default LoginForm 