import React from 'react';
import axiosWithAuth from '../axios/index';


class LoginForm extends React.Component{
    
state = {
credentials: {
        username: '',
        password: ''
    },
    isLoggedIn: false
};

handleChange = e => {
this.setState({
    credentials: {
    ...this.state.credentials,
    [e.target.name]: e.target.value
    }
});
};

onSubmit = e => {
    e.preventDefault();
    const authAxios = axiosWithAuth();
    authAxios
    .post ('/login', this.state.credentials)
    .then(response =>{
        console.log("data", response);
        sessionStorage.setItem("token", response.data.payload);
        this.setState({ ...this.state, isLoggedIn: true });
    }); 
};

componentDidMount() {
if (sessionStorage.getItem("token")) {
    this.setState({ ...this.state, isLoggedIn: true });
} else {
    this.setState({ ...this.state, isLoggedIn: false });
}
}

render() {
    return (
        <div>
    <h2>{this.state.isLoggedIn ? "LOGGED IN!" : "Please login"}</h2>
        <form onSubmit={this.onSubmit}>
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
        </div>
    );
    }
}



export default LoginForm;