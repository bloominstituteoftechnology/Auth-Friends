import React, { useState } from 'react';
import axios from 'axios';

function Login(props) {

    const [cred, setCred] = useState({
        username: '',
        password: ''
      });
    
      const handleChange = e => {
        setCred({...cred, [e.target.name]: e.target.value});
      };
    
      const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/login', cred)
        .then(res => {
            console.log(res.data)
            localStorage.setItem('token', res.data.payload);
            props.history.push('/friendslist');
        })
        .catch(err => console.log(err))
      };
    
      return (
        <div>
          <form onSubmit={handleSubmit}>
            <input
              name='username'
              value={cred.username}
              onChange={handleChange}
            />
            <input
              name='password'
              value={cred.password}
              onChange={handleChange}
            />
            <button>Login</button>
          </form>
        </div>
      );
}

export default Login;