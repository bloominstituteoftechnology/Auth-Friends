import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: '',
        },
        error: '',
    };

    handleChange = (e) => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value,
            },
            error: '',
        });
    };

    login = (e) => {
        e.preventDefault();
        axios
        .post('http://localhost:5000/api/login', this.state.credentials)
        .then((res) => {
            localStorage.setItem('token', JSON.stringify(res.data.payload));
            this.props.history.push('/friends');
        })
        .catch((err) => this.setState({err}));
    }

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <label> Username: 
                    <input 
                    type='text'
                    name='username'
                    value={this.state.credentials.username}
                    onChange={this.handleChange}
                    />
                    </label>
                    <label> Password:
                    <input 
                    type='password'
                    name='password'
                    value={this.state.credentials.password}
                    onChange={this.handleChange}
                    />
                    </label>
                    <p style={{ color: `red`, fontSize: "12px" }}>{this.state.error}</p>
                    <button>Log in</button>
                </form>
            </div>
        );
    }
}

export default Login;