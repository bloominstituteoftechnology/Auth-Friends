import React from 'react';
import axios from 'axios';
import e from 'express';

class Login extends React.Component{
    state={
        credentials:{
            username:'',
            password: ''
        }
    }

    handleChange = (evt) =>{
        this.setState({
            credentials:{
                ...this.state.credentials,
                [evt.target.name]: evt.target.value
            }
        })
    };


    login =(evt) =>{
        e.preventDefault();
        axios.post('http:localhost5000/api/login', this.state.credentials)
        .then((res) =>{
            sessionStorage.setItem('token', res.data.payload);
            this.props.history.push('/friendslist')
        })
        .catch((err) =>{
            console.log(err);
        })
    };

    render(){
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
                    <button>Log in</button>
                </form>
            </div>
        )
    }

};

export default Login;