import React from 'react';
import axios from 'axios';

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
                    console.log("dc: Login.js: login: success: res: ", res);
                    localStorage.setItem("token", res.data.payload);
                    this.props.history.push("/protected");
                    })
                    .catch(err => console.error(err));
                };

render(){

    return (
        <div>
        <form onSubmit={this.login}>
        <input
        type="text"
        name="username"
        placeholder="Username"
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
        <button>Login</button>
        </form>




        </div>
    )
}







}



export default Login;