import React, {useEffect, useState} from 'react';
import {axiosAuthWithToken} from '../utils/axiosWithAuth';

const Login = () => {

    // set state for form values
    const [formValues, setFormValues] = useState({
        username: '',
        password: ''
    })

    const [errors, setErrors] = useState('');

    // submit credentials, if successful returns token, if unsuccesful console logs error
    const submitCredentials = (credentials) => {
        return axiosAuthWithToken()
            .post('/api/login', { username: credentials.username, password: credentials.password })
            .then (res => {
                localStorage.setItem('token', res.data.payload)
                console.log(res.data.payload)
            })
            .catch(err => {
                setErrors(err.response.data.error)
            })
    }
    
    // handle submit

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(formValues)
        submitCredentials(formValues)
    }

    return (
        <div>
            <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                     <label htmlFor="username">Username
                        <input
                            type = "text"
                            name="username"
                            value = {formValues.username}
                            onChange = {e => setFormValues({...formValues, username: e.target.value})}
                        />
                        </label>
                        <label htmlFor="password">Password
                            <input
                            type = "password"
                            name="password"
                            value = {formValues.password}
                            onChange = {e => setFormValues({...formValues, password: e.target.value})}
                            />
                        </label>
                        <button type = "submit">Login</button>
                </form>
                <p>{errors}</p>
        
        </div>
    )
}

export default Login;