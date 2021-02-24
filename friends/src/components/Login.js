import React from 'react';
import axios from 'axios';

import {useState} from 'react';


const initialState = {
    credentials:{
        username:'trey',
        password:'password'
    },
    error: ''
}



const Login = (props) =>{
   const [state, setState] = useState(initialState)
//    console.log(state)

    const handleChange = (e) =>{
        setState({
            credentials:{
                ...state.credentials,
                [e.target.name]: e.target.value,
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:5000/api/login', state.credentials)
            .then((res) =>{
                console.log(res)
                localStorage.setItem('token', JSON.stringify(res.data.payload));
                props.history.push('/friends')

            })
            // .catch((err) =>setState({error:err.response.data.error}))
    } 

   return (
    <div>
        <h3>Login</h3>
      <form onSubmit={handleSubmit}>
          <label htmlFor='username'>Username:</label>
        <input
          type="text"
          name="username"
          value={state.credentials.username}
          onChange={handleChange}
        />
        <lable htmlFor='password'>Password:</lable>
        <input
          type="password"
          name="password"
          value={state.credentials.password}
          onChange={handleChange}
        />
        <p style={{ color: `red`, fontSize: "12px" }}>{state.error}</p>
        <button>Log in</button>
      </form>
    </div>
  );
};

export default Login

