import React from "react";
import axios from "axios";

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = event => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [event.target.name]: event.target.value
            }
        });
    };

    login = () => {
        axios.post("http://localhost:5000/api/login", {
            username: this.state.credentials.username,
            password: this.state.credentials.password
        })
        .then(response => {
            localStorage.setItem("token", response.data.payload)
        })
        .catch( error => console.log("ERROR", error ))
    };

    render() {
        return (
            <div>
                <h1>Log In here!</h1>
                <form onSubmit={this.login}>
                    <input
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                        placeholder="Enter Username"
                    />
                    <input 
                        type="password"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                        placeholder="Enter Password"
                    />
                    <button>Log In!</button>
                </form>
            </div>
        );
    };
};

export default Login;