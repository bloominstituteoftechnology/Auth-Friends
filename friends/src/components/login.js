import React from 'react';

import axiosWithAuth from '../utils/axiosWithAuth';

class Login extends React.Component {
    state= {
        credentials: {
            username:"",
            password:""
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
    axiosWithAuth
    .post("login", this.state.credentials)
    .then(res => {
        localStorage.setItem("toke", res.data.payload);
        this.props.history.push("/protected");
        console.log(res)
    })
    .catch(err => 
        console.error("AA: Login.js: Login: err.message", err.message)
    );
};

render() {
    return(
        <div>
            <form onSubmit={this.login}>
                <input
                    type="text"
                    name="username"
                    value={this.state.credentials.username}
                    onChange={this.handleChange}
                />
                <input  
                    type="text"
                    name="password"
                    value={this.state.credentials.password}
                    onChange={this.handleChange}
                />
            </form>
        </div>
    );
}
};

export default Login;