import React, { useState} from "react";
import { useHistory } from 'react-router-dom'

import  axiosWithAuth  from "../utils/axiosWithAuth";
// import { BrowserRouter as Router} from "react-router-dom";
// import styled from "style-component";

// const FormWrapper = styled.div`
//   max-width: 450px;
//   background: #fafafa;
//   padding: 30px;
//   margin: 50px auto;
//   box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.35);
//   border-radius: 10px;
//   border: 6px solid #305a72;
// `;

const initCredentials = {
    username: "",
    password: "",
}



const Login = () => {
    const history = useHistory()
    const [ credentials, setCredentials] = useState(initCredentials)

    const onFormChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault()
        axiosWithAuth()
        .post('/api/login', credentials)
        .then(res => {
            localStorage.setItem("token", res.data.payload);
            history.push('/friends')
        })
        .catch(err => {
            console.log(err, "err.")
        })
        setCredentials(credentials)
    }

    return (
        <section className="form-style">
            <h1 className="form-header">Login</h1>
            <form  onSubmit={onSubmit} className="friend-form">
                <label className="form-label">Username  &nbsp;
                    <input 
                    name="username"
                    type="text"
                    value={credentials.username}
                    onChange={onFormChange}                    
                    />
                </label>
                <label className="form-label">Password &nbsp;
                    <input 
                    name="password"
                    type="text"
                    value={credentials.password}
                    onChange={onFormChange}                      
                    />
                </label>
                <button className="submit">Login</button>
            </form>
        </section>
    )
}

export default Login