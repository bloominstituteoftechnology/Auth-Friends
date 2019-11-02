import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const LoginForm = (props) => {
    const [data, setData] = useState({
        username: '',
        password: ''
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = e => {
        e.preventDefault();
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setIsLoading(true)
        axiosWithAuth().post('http://localhost:5000/api/login', data)
            .then((res) => {
                localStorage.setItem('token', res.data.payload)
                props.history.push('/friends')
                setIsLoading(false)
            })
    }

    return (
        <section className='log-in-form-wrapper'>
            {isLoading ? (
            <div>
                Loading...
            </div>
            ) : (
                null
            )}
            <form onSubmit={handleSubmit} className='log-in-form'>
                <input onChange={handleChange} name='username' vale={data.username} placeholder='Username' />
                <input onChange={handleChange} name='password' value={data.password} placeholder='Password' />

                <button>Sign In</button>
            </form>
        </section>
    )
}

export default LoginForm;