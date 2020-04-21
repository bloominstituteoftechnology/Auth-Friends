import React from 'react';
import axios from 'axios';
import { authenticAxios } from '../utils/authenticAxios';

class Login extends React.Component {
    state = {
        creds: {
            username: '',
            password: '',
            isLoading: false,
        },
        friend: {
            id: '',
            name: '',
            age: '',
            email: '',
        },
    };

    login = (e) => {
        e.preventDefault();
        authenticAxios()
            .post('./api/login', this.state.creds)
            .then((res) => {
                console.log(res);
                // localStorage.setItem('token', JSON.stringify(res.data.payload))
            })
            .catch((err) => {
                console.log(err);
            });
    };

    render() {
        return (
            <section>
                <form>
                    <input
                        type="text"
                        name="username"
                        value={this.state.creds.username}
                        onChange={this.handleChanges}
                    />
                    <input
                        type="password"
                        name="password"
                        value={this.state.creds.password}
                        onChange={this.handleChanges}
                    />
                    <button value="Log in" />
                </form>
            </section>
        );
    }
}

export default Login;
