import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class LoginForm extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
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
        .post('/login', this.state.credentials)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            this.props.history.push('/friends');
        })
    };

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <input type='text' name='username' value={this.state.credentials.username} onChange={this.handleChange} />
                    <input type='text' name='password' value={this.state.credentials.password} onChange={this.handleChange} />
                    <button>Log In</button>
                    {this.state.isFetching && 'logging in...'}
                </form>
            </div>
        )
    }
}

export default LoginForm