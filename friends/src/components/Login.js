import React, { Component } from 'react'
import axios from 'axios';
import "./Login.css";

export default class Login extends Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [event.target.name]: event.target.value
            }
        })
    };
    
    login = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/api/login', this.state.credentials)
          .then(res=>{
            localStorage.setItem('token', res.data.payload);
            this.props.history.push('/protected');
          })
          .catch(err=>{
            console.log(err);
          });
    };
    
    render() {
        return (
            <div className="login">
                <form onSubmit={this.login} className="form">
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
                    <button>LOG IN, YA 💩</button>
                </form>
            </div>
        )
    }
}

