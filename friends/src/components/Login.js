import React from 'react';
import axios from 'axios';

class Login extends React.Component{

    state ={
        credentials :{
            username: '',
            password:''
        }
    };

    // console.log(state)

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
        axios.post("http://localhost:5000/api/login", this.state.credentials)
            .then(res => {
                console.log(res)
                localStorage.setItem("authToken", res.data.payload);
                //Push back to logged in Home page
            })
            .catch(err => console.log(err))

    }

    render() {
        return(
        <div>
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
                <button>Log In</button>
            </form>    
        </div>
        );
    }

}

export default Login;