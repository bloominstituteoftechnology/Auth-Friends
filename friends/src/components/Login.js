import React from "react";
import {axiosWithAuth} from '../utils/axiosWithAuth';

class Login extends React.Component {
    state = {
        credentials: {
            username: "",
            password: ""
        },
        isFetching: false
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
        this.setState({
            isFetching: true
        });
        axiosWithAuth()
        .post("/login", this.state.credentials)
        .then(res => {
            console.log(res);
            localStorage.setItem("token", res.data.payload);
            this.props.history.push('/protected');
        })
        .catch((err) => {
            console.error(err.message);
            localStorage.removeItem("authToken");
        });
    };

    render() {
        return (
            <div>
            <h1>White Lotus Entrance</h1>
            <h2>Please provide your secret name and password for entrance.</h2>
                <form onSubmit={this.login}>
                    <input
                        type="text"
                        name="username"
                        placeholder="secret name"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    /> 
                    <button>Enter</button>
                    {this.state.isFetching && 'logging in'}
                </form>
            </div>
        );
    }
}

export default Login;