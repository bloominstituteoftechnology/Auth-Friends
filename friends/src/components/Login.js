import React, { useState } from 'react'; 
import { axiosWithAuth } from '../utils/axiosWithAuth';
const Login = (props) =>{

    const [login, setLogin]= useState({
        username:'',
        password:''
    })

    const handleChange = event=>{
        setLogin({...login, [event.target.name]: event.target.value})
    }
    const handleSubmit = event =>{
        event.preventDefault();
    
    axiosWithAuth()
    .post('/api/login',login)
    .then(response =>{
        window.localStorage.setItem('token', response.data.payload);
        props.history.push('/protected')
    })
    .catch(error => console.log('This is an error', error))
}
    return (
    <div>
         <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            value={login.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={login.password}
            onChange={handleChange}
          />
          <button>Log in</button>
        </form>
    </div>
)}; 

export default Login