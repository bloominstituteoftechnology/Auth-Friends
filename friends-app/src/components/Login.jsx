import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
// import axios from 'axios'

class Login extends React.Component {
    state = {
        login: {
            username: "",
            password: ""
        }
    }

    handleChange = e => {
        this.setState({
            login: {
                ...this.state.login,
                [e.target.name]: e.target.value
            }
        })
    }

    login = e => {
        e.preventDefault();
        // console.log(this.state.login);
        axiosWithAuth()
            .post("/api/login", this.state.login)
            .then(res => {
                localStorage.setItem("token", res.data.payload);
            })
            .catch(err => console.log(err.response));
        this.props.history.push("/friends");
    }

    render() {
        return (
            <div className="login-form">
                <h2>Please Log In.</h2>
                <form onSubmit={this.login}>
                    <label>
                        Username:
                        <input
                            type="text"
                            name="username"
                            value={this.state.login.username}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br />
                    <label>
                        Password:
                        <input
                            type="password"
                            name="password"
                            value={this.state.login.password}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br />
                    <button>Sign In</button>

                </form>
            </div>
        )
    }
}

export default Login;