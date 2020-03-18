import React from "react"
import { render } from "react-dom";

import axios from "axios"
import FriendsList from "./FriendsList";
import { axiosWithAuth } from "../utils/axiosWithAuth";
class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoading: false,
            credentials: {
                username: '',
                password: ''
            }
        }
    }
    handleChange = event => {
        this.setState( { credentials: {
            ...this.state.credentials,
            [event.target.name]: event.target.value
        }})
        console.log(this.state.credentials)
    }
    handleSubmit = event => {
        event.preventDefault();
        this.setState({...this.state, isLoading: true});
        axiosWithAuth().post('/api/login', this.state.credentials)
        .then(res => {
            console.log(res);
            window.localStorage.setItem('token', res.data.payload);
            this.setState({...this.state, isLoading: false});
            this.props.history.push('/protected')
        })
        .catch(err => console.log(err))
    }
   

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name="username" onChange={this.handleChange}/>
                    <input name="password" onChange={this.handleChange}/>
                    <button>Login</button>
                </form>
                {this.state.isLoading && <div>Loggin in</div>}
            </div>
        )
    }
}

export default Login