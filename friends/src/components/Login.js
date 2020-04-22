import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Links from './Links';
import axios from 'axios';

const Login = (props) => {
  const history = useHistory();
  const [credentials, setCredentials] = useState({
        username: '',
        password: ''
  })

  const handleChange = e => {
    e.preventDefault();
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  }

  const login = e =>{
    e.preventDefault();
    axios.post('http://localhost:5000/api/login', credentials)
         .then(response => {
           localStorage.setItem('token', JSON.stringify(response.data.payload));
           history.push('/friends')
         })
         .catch(error => console.log(error));
         
    setCredentials({
      ...credentials,
      username: '',
      password: ''
    });
    
  }
  
  return (
    
    <div className='login'>
      <Links/>
      <form className='form' onSubmit={login}>
          <label htmlFor='username'>Username</label>
          <input 
            type='text' 
            className='input' 
            name='username' 
            onChange={handleChange}
            value={credentials.username}
          />
          <label htmlFor='Password'>Password</label>
          <input 
            type='password' 
            className='input' 
            name='password' 
            onChange={handleChange}
            value={credentials.password}
          />
          <div className='space-maker'></div>
        
          <button type='submit' className='button is-light'>Send</button>
     </form>
     </div>
    )

};

export default Login;