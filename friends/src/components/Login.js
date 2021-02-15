import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
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
        axios.post('http://localhost:5000/api/login', this.state.credentials)
            .then(res => {
                console.log("AM: Login.js: login: res: ", res);
                localStorage.setItem("token", res.data.payload);
                this.props.history.push('/friendsList');
            })
            .catch(err => console.error("Cannot Login to server", err.message));
    };

    render() {
        return (
            <div>
                <form onSubmit={this.login} >
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" value={this.state.credentials.username} onChange={this.handleChange} />

                    <label htmlFor="password" >Password:</label>
                    <input type="password" id="password" name="password" value={this.state.credentials.password} onChange={this.handleChange} />

                    <button>Submit</button>
                </form>
            </div>
        )
        }
};

export default Login;