import React, { useState } from 'react'; 
import axios from 'axios'; 

const Login = () => {
    const [state, setState] = useState({
        username: "", 
        password: "" 
    }); 

    const handleChange = (e) => {
        const { id, value } = e.target
        setState(prevState => ({
            ...prevState,
            [id] : value
        })); 
    }

    const login = (e) => {
        e.preventDefault(); 
        axios
        .post("http://localhost:5000/api/login", state)
        .then((res) => {
            console.log(res)
            localStorage.setItem("token", res.data.payload); 
        })
        .catch((err) => console.log(err))
    }

    return (
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form onSubmit={login}>
                <div className="form-group text-left">
                    <label hmtlfor="username">Username</label>
                    <input 
                        type="username"
                        className="form-control"
                        id="username"
                        aria-describedby="usernameHelp"
                        placeholder="Enter Username"
                        value={state.username}
                        onChange={handleChange}
                    />
                    <small id="usernameHelp" className="form-text text-muted">
                        we'll never share your information with anyone
                    </small>
                </div>
                <div className="form-group text-left">
                    <label hmtlfor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        value={state.password}
                        onChange={handleChange}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    Register
                </button>
            </form>

        </div>
    )
}

export default Login; 