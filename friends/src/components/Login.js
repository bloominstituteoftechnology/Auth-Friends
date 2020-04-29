import React, { useState } from "react"

function Login() {
    const [values, setValues] = useState({
        email: "",
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
    }

    return (
        <div>
            <h1>Friends!</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <h3>E-Mail Address</h3>
                    <input type="text" placeholder="email" name="email" onChange={handleChange} value={values.email} />
                </div>
                <div>
                    <h3>Password</h3>
                    <input type="password" placeholder="password..." name="password" onChange={handleChange} value={values.password} />
                </div>
            </form>
        </div>
    )
}


export default Login;