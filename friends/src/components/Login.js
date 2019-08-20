import React, { useState } from 'react';
import { axiosWithAuth } from '../path/to/module';

const Login = () => {
    const [formValues, setFormValues] = useState({})

    const handleChange = (e) => {
        e.preventDefault();
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
          })
    }

    const login = e => {
        e.preventDefault();
        axiosWithAuth().get('login/endpoint', credentials)
          .then(res => {
            localStorage.setItem('token', res.data.token);
            this.props.history.push('/');
          })
      }

    return (
    <>
    <form onSubmit={login}>
            <label> User Name:</label> <br />
            <input type="text" name="userName" value={formValues.username} onChange={handleChange} /><br />
            <label>Passwork: </label><br />
            <input type="password" name="password" value={formValues.password} onChange={handleChange} /><br />
            <button type="submit">Log in!</button>
    </form>
    </>
    )
} 

export default Login;