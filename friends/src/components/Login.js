import React from "react";
import axios from "axios";

class Login extends React.Component {
    
    state = {
        credientials: {
            username: "",
            password: ""
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

    login = event => {
        event.preventDefault();
        axios
            .post("http://localhost:5000/api/login", this.state.credentials)
            .then(res => {
                console.log("Login.js : Login: login: then: res", res);
                localStorage.setItem("token", res.data.payload);
                this.props.history.push("/protected");
            })
            .catch( error => {
                console.log("Login.js: Login: login: then: error.message", error.message)
            });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <input 
                    type="text"
                    name="username"
                    value={this.state.credientials.username}
                    onChange={this.handleChange}
                    />
                    <input
                    type="password"
                    name="password"
                    value={this.state.credientials.password}
                    onChange={this.handleChange}
                    />
                    <button> Login In </button>
                </form>
            </div>
        );
    }
};

export default Login; 