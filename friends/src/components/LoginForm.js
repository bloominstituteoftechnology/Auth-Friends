import React, {useState} from 'react';
import axios from 'axios';
import {axiosWithAuth} from '../utils/axiosWithAuth';

class LoginForm extends React.Component {

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

    //username: Lambda School
    //password: i<3Lambd4
    //token: esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ
    login = event => {
        event.preventDefault();
        axios.post('http://localhost:5000/api/login', this.state.credentials)
            .then(response => {
                window.localStorage.setItem('token', response.data.payload);
                this.props.history.push('/friends');})
            .catch(error => console.log(error));
    }

    render() {

        return (
            <div className='login-form-container'>
                <form onSubmit={this.login}>
                    <input type="text" name="username" value={this.state.credentials.username} onChange={this.handleChange} />
                    <input type="text" name="password" value={this.state.credentials.password} onChange={this.handleChange} />
                    <button>Login</button>
                </form>
            </div>
        );

    };

};

export default LoginForm;