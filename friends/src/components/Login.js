import React, { useState } from "react"
import axios from "axios";

const Login = props => {
    const [values, setValues] = useState({
        username: "",
        password: ""
    })


    function handleChange(e) {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        axios.post("http://localhost:5000/api/login", values)
            .then(
                res => {
                    localStorage.setItem("token", res.data.payload)
                    props.history.push("/addfriend")
                })
            .catch(
                error => 
                console.log(error)
            )
    }

    return (
        <div>
            <h1>Friends!</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <h3>Username</h3>
                    <input type="text" placeholder="username" name="username" onChange={handleChange} value={values.username} />
                </div>
                <div>
                    <h3>Password</h3>
                    <input type="password" placeholder="password..." name="password" onChange={handleChange} value={values.password} />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}


export default Login;