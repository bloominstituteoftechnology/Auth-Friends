import React, {useState} from 'react'
import axios from "axios";
import Header from "./Header";

function LoginPage(props) {
    const [login, setLogin] = useState({username: "", password: ""});

    const check = localStorage.getItem("token")

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/login", login)
        .then(res => {
            localStorage.setItem("token", res.data.payload);
        })
        .catch(error => {
            console.log(error)
        })
        props.history.push("/")
    }

    return (
        <div className="login">
            <Header />
            <div className="login__content">
                {check 
                ? <div className="error-box"><h1>You Are Already Signed In</h1></div>
                : <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input id="name" type="text" required onChange={(e) => setLogin({...login, username: e.target.value})}/>
                <label htmlFor="password">Password:</label>
                <input id="password" type="text" required onChange={(e) => setLogin({...login, password: e.target.value})}/>
                <button type="submit">Login</button>
            </form>}
            </div>
        </div>
    )
}

export default LoginPage
