import React from 'react';
import {axiosWithAuth} from "../utils/axiosWithAuth";


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

        axiosWithAuth()
            .post('/login', this.state.credentials)
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.data.payload);
                this.props.history.push('/protected')
            })
            .catch(err => {
                console.log({err})
            })
    }

    render() {
        return (
            <>
                <form onSubmit={this.login}>
                    <input
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <button>Log in</button>
                </form>
            </>
        )


    }

}

export default Login;
