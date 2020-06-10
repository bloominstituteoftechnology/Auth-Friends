import React, {useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const Login = ({setIsLoggedIn}) => {

    
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const {push} = useHistory();

    const handleChange = e => {
        setCredentials({...credentials, [e.target.name]: e.target.value })

    };

    const handleSubmit = e => {
        e.preventDefault();
        setIsLoading(true);
        axios.post("http://localhost:5000/api/login", credentials)
        .then(res => {
            console.log("login, post", res)
            localStorage.setItem("token", res.data.payload)
            localStorage.setItem("Logged in", true)
            setIsLoading(false);
            push("/friends");
            setIsLoggedIn(true);
        })
        .catch(err => {
            console.log("err", err, credentials)
            setIsLoading(false);
        })
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                value={credentials.username}
                onChange={handleChange}
                placeholder="Username"
            />
            <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                placeholder="Password"
            />
            
          
          {isLoading ? 'loading...' : <button type="submit">Log in</button>}
        </form>
        </div>
    );
}

export default Login;