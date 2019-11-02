import React, { useState } from 'react';
import api from '../utils/api';


function Login(props) {
    const [error, setError] = useState()
    const [status, setStatus] = useState({
        username:'',
        password: '',
    })

    const handleChange = (event) => {
        setStatus({
            ...status,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        api().post("/api/login", status)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.payload)
            props.history.push('/account')
        })
        .catch(err => {
            setError(err.res, status.msg)
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            {error && <div className='error'>{error}</div>}
            <input type='text' name='username' placeholder="Username" value={status.username} onChange={handleChange} />
            <input type='password' name='password' placeholder="Password" value={status.password} onChange={handleChange} />

            <button type='submit'>Login</button>
        </form>
    )
}

export default Login
