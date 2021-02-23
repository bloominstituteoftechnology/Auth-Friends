import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = (props) => {
    const [form, setForm] = useState({
        username: "",
        password: ""
    })

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const login = e => {
        e.preventDefault();
        console.log(form)
        axios.post("http://localhost:4000/api/login", form)
        .then(res => {
            console.log("response", res)
            localStorage.setItem("token", res.data.payload)
            props.history.push("/protected")
        })
        .catch(err => console.log("error", err))
    }

    return (
        <div>
            <form onSubmit={login}>
                <input type="text" name="username" value={form.username} onChange={handleChange}/>
                <input type="text" name="password" value={form.password} onChange={handleChange}/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginForm; 