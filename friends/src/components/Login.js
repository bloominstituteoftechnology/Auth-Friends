import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class Login extends React.Component {
    state = {
        credentials: {
        username: "",
        password: ""
        }
    };

    handleChange = e => {
        this.setState({
        credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
        }
        });
    };

    login = e => {
        e.preventDefault();
        axiosWithAuth()
        .post("/login", this.state.credentials)
        .then(res => {
            localStorage.setItem("token", res.data.payload);
            this.props.history.push("/friends");
        })
        .catch(err => console.log(err));
    };

    render() {
        return (
        <div className="form">
            <h1>Time to Login: </h1>
            <form onSubmit={this.login}>
            <input
                type="text"
                name="username"
                value={this.state.credentials.username}
                onChange={this.handleChange}
                placeholder="Username"
            />
            <input
                type="password"
                name="password"
                value={this.state.credentials.password}
                onChange={this.handleChange}
                placeholder="Password"
            />
            <button type="submit">Login</button>
            </form>
        </div>
        );
    }
}

export default Login;