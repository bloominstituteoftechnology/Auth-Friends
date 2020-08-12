import React, { Component } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth';

export default class Login extends Component {

    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({
          credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
          }
        });
      };    

    login = (e) => {
        e.preventDefault();
        axiosWithAuth()
        .post('/login', this.state.credentials)
        .then(res => {
            console.log('el: login success: res: ', res)
            localStorage.setItem('authToken', res.data.payload)
            this.props.history.push('/protected')
        })
        .catch(err => {
            console.log('el: login error: err: ', err.message)
            localStorage.removeItem('authToken')
        })
    }


    render() {
        return (
            <div>
                <form onSubmit = {this.login}>
                    <label>
                        E-mail : 
                        <input type = 'text' 
                            name = 'username' 
                            value = {this.state.credentials.username} 
                            onChange = {this.handleChange}/>
                    </label>

                    <label>
                        Password :
                        <input type = 'password'
                            name = 'password'
                            value = {this.state.credentials.password}
                            onChange = {this.handleChange}/>
                    </label>

                    <button>Login</button>
                </form>
            </div>
        )
    }
}
