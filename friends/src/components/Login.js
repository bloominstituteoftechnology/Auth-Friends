import React from 'react';
import { Redirect } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChanges = e => {
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
        .post('/api/login', this.state.credentials)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            this.props.history.push('/protected');
        })
        .catch(err => console.log(err.response));
    };

    render(){
        // if (localStorage.getItem('token')){
        //     return <Redirect to='protected' />
        // }
        return (
            <div>
                <form onSubmit={this.login}>
                    <input
                    type='text'
                    name='username'
                    value={this.state.credentials.username}
                    onChange={this.handleChanges}
                    />
                    <input
                    type='text'
                    name='password'
                    value={this.state.credentials.password}
                    onChange={this.handleChanges}
                    />
                    <button>Log In</button>
                </form>
            </div>
        );
    }
}

export default Login;