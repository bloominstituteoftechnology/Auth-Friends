import React, {useState} from 'react'
import axios from "axios"

const initialFormValues = {
    username: "",
    password: ""
}
function Login(props) {

    const [formValues, setFormValues] = useState(initialFormValues)

    const handleChange = e => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
         })
    }

    const onSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/login', formValues)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                props.history.push('/protected')
                console.log("success", res.data)
            })
            .catch(err => {
                console.log("fail", err)
            }) 
    } 
    return (
        <form onSubmit = {onSubmit}>
            <input 
            type = "text"
            name = "username" 
            values = {formValues.username}
            onChange = {handleChange}
            ></input>
            <input
            type = "password"
            name = "password"
            values = {formValues.password}
            onChange = {handleChange}
            ></input>
            <button>Login</button>
        </form>
    )
}

export default Login
