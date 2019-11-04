import React, { useState } from 'react'

export default function Login() {
    const [token, setToken] = useState([])


    const changeHandler = (event) => {
        setToken({...token, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setToken(token);

        setToken({username: "", password: ""})
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    className="name"
                    placeholder="Username"
                    type="text"
                    value={token.username}
                    name="name"
                    onChange={changeHandler}
                />
                <input
                    className="password"
                    placeholder="Password"
                    type="password"
                    value={token.password}
                    name="age"
                    onChange={changeHandler}
                />
                <button type="submit" className="SubmitButton">Login</button>
            </form>
        </div>
    )
}
