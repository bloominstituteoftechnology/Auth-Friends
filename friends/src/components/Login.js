import React from 'react';
import { axiosWithAuth } from '../util/axiosWithAuth';

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
            .post('http://localhost:5000/api/login', this.state.credentials)
            .then(res => {
                localStorage.setItem('token', JSON.stringify(res.data.payload));
                this.props.history.push('/friends');
            })
            .catch(err => console.log({err}));
    };

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <input 
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChanges}
                    />
                    <input
                        type="password"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChanges}
                    />
                    <button onClick={this.login}>Log In</button>
                </form>
            </div>
        )
    }
}

export default Login;