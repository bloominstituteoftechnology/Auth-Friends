import React, { useState } from 'react';
import { axiosWithAuth } from '../utils';

const Login = () => {
    const [formValues, setFormValues] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        e.preventDefault();
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const login = e => {
        e.preventDefault();
        axiosWithAuth()
            .get('http://localhost:5000/api/friends', formValues)
            .then(res => {
                localStorage.setItem('token', res.data.token);
                this.props.history.push('/')
            .catch(err => console.log('your error sire, ', err))
            })
    }

    return (
        <div className='login-form'>
            <form onSubmit={login}>
                <label> User Name:</label> <br />
                <input type="text" name="username" value={formValues.username} onChange={handleChange} /><br />
                <label>Passwork: </label><br />
                <input type="password" name="password" value={formValues.password} onChange={handleChange} /><br />
                <button type="submit">Log in!</button>
            </form>
        </div>
    )
}

export default Login;