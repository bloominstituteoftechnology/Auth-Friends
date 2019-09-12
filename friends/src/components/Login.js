import React, { useState } from "react";
import axios from 'axios';

const Login = props => {
    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(user);
        axios
        .post('http://localhost:5000/api/login', user)
        .then(res=>{
            // console.log('success!', res)
            console.log(res.data.payload)
            localStorage.setItem('token', res.data.payload);
            props.history.push('/protected');
        })
        .catch(err=>{
            console.log("ERROR", err);
        })
    }

    const handleChange = (e) =>{
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Enter username" value={user.username} onChange={handleChange} />
        <input type="password" name="password" placeholder="Enter Password" value={user.password} onChange={handleChange} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
