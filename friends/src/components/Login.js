import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: '',
        }
    };

    handleChange = (e) => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };
// first post request
   login = e => {
        e.preventDefault();

        axios.post('api/login'), this.state.credentials)
        .then(res => {
            localStorage.setItem('token', res.data.token);
            this.props.history.push('/friends');
        })
        .catch((err) => {
            console.log(err);
        });
    };

//login form

    render() {
    return(
        <div>
        <form>
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
        <button>Submit</button>
        </form>
        </div>
    )
}
}
export default Login;