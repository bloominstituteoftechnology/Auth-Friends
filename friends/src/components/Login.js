import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = props => {
    const [isLoading, setIsLoading] = useState(false);
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const login = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("/login", credentials)
            .then(res => {
                // console.log(res);
                localStorage.setItem("token", res.data.payload)
                props.history.push("/protected")
            })
            .catch(err => console.log(err))
    }

    // console.log(credentials);

    return (
        <form onSubmit={login}>
            <input type="text" name="username" placeholder="Enter username" onChange={handleChange} />
            <input type="password" name="password" placeholder="Enter password" onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
    )
}

export default Login;