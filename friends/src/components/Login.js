import React from 'react'
import axios from 'axios'

class Login extends React.Component {

    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    login = e => {
        e.preventDefault()
        axios
        .post('http://localhost:5000/api/login', this.state.credentials)
        .then(res => {
            localStorage.setItem("token", res.data.payload)
        })
        .catch(err => {
            console.log('ERROR: ', err)
        })
    }

    render() {


        return(

            <div>
            <form onSubmit={this.login}>
            <label>Username: </label> 
            <input
            type='text'
            name='username'
            value={this.state.credentials.username}
            onChange={this.handleChange}
            />

            <label>Password:</label>
            <input
            type='text'
            name='password'
            value={this.state.credentials.password}
            onChange={this.handleChange}
            />
            <button type='submit'>Sign In!</button>
            </form>
            
            </div>
        )
    }
}

export default Login