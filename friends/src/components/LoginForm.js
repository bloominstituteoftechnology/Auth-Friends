import React, { useState } from 'react';
import { useContext } from 'react'
import axios from 'axios'

const LoginForm = () => {
    const [logini, setLogini] = useState([])
    

    const changeHandler = (event) => {
        setLogini({...logini, [event.target.name]: event.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("within handleSubmit", logini);
        setLogini(logini);
        // console.log(person);
        setLogini({username: "", password: ""})
    };

    return (
        <div className="loginContainer">
            <h1>Hello, friend!</h1>
            <form onSubmit={handleSubmit}>
                <input
                    className="name"
                    placeholder="enter username"
                    type="text"
                    value={logini.username}
                    name="name"
                    onChange={changeHandler}
                />
                <input
                    className="password"
                    placeholder="enter password"
                    type="password"
                    value={logini.password}
                    name="age"
                    onChange={changeHandler}
                />
                <button type="submit" className="SubmitButton">Connect!</button>
            </form>
        </div>
    )
}

export default LoginForm;
