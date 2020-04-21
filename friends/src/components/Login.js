import React from 'react';
import axios from 'axios';

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
