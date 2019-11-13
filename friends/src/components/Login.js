import React, { useState } from "react";
import axios from "axios"; 
import { Redirect } from "react-router-dom";

const Login = () =>{

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onUsernameChange = (e) =>{
        setUsername(e.target.value);
    }

    const onPasswordChange = (e) =>{
        setPassword(e.target.value);
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        const credentials = {username: username, password: password}
        axios.post('http://localhost:5000/api/login', credentials)
            .then((response)=>{
                console.log(response)
                sessionStorage.setItem("token", response.data.payload);
               return( <Redirect to="/friends"/> )
            })
            .catch((error)=>{
                console.log(error);
            })
    }
    return(
        <div className="login">
            <form>
                <label>
                    <p>Username:</p>
                    <input name="username" value={username} onChange={onUsernameChange}/>
                </label>
                <label>
                    <p>Password:</p>
                    <input name="password" value={password} onChange={onPasswordChange}/>
                </label>
                <button onClick={onSubmit}>Login</button>
            </form>
        </div>
    )
}

export default Login;