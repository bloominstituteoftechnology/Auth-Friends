import React, {useState} from 'react'
import axios from "axios";

function LoginPage() {
    const [login, setLogin] = useState({username: "", password: ""});

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/login", login)
        .then(res => {
            localStorage.setItem("token", res.data.payload);
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input id="name" type="text" required onChange={(e) => setLogin({...login, username: e.target.value})}/>
                <label htmlFor="password">Password:</label>
                <input id="password" type="text" required onChange={(e) => setLogin({...login, password: e.target.value})}/>
                <button type="submit">Login</button>
            </form>
            
        </div>
    )
}

export default LoginPage
