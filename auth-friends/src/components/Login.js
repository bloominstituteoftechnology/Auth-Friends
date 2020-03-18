import React, { useState } from "react"
import axios from "axios"

const Login = (props) => {
    const [credentials, setCredentials] = useState({username: "", password: ""})

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const login = e => {
        e.preventDefault();
        console.log(props.history)
        axios.post("http://localhost:5000/api/login", credentials)
            .then(res => {
                window.localStorage.setItem('token', res.data.payload)
                props.history.push("/friends")
            })
            .catch(err => console.log(err))
    }

    return (
        <form className="login-form" onSubmit={login}>
            <input 
                className="login input"
                placeholder="Username"
                name="username"
                value={credentials.username}
                onChange={handleChange}
            />
            <input 
                className="login input"
                placeholder="Password"
                name="password"
                type="password"
                value={credentials.password}
                onChange={handleChange}
            />
            <button className="login button" type="submit">Login</button>

        
        </form>
    )
}

export default Login;
