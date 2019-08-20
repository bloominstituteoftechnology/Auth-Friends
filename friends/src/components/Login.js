import React from 'react'
import logo from '../logo.png'

 import { Form, Input, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../actions'

 class Login extends React.Component {
    state = {
        credentials: {
            username: "",
            password: ""
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

     handleLogin = e => {
        e.preventDefault();
        this.props
          .login(this.state.credentials)
          .then(() => this.props.history.push("/protected"));
    }

     render() {
        return (
            <div className="App-wrapper">
                <Link to='/'>
                    <img src={logo} className="App-logo" alt="logo" />
                </Link>
                <h2>Login to the Friends App!</h2>
                <Form onSubmit={this.handleLogin}>
                    <Input
                        type='text'
                        name='username'
                        placeholder='Username'
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <Input
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <Button className='login-btn'>Login</Button>
                </Form>
            </div>
        )
    }
}

 export default connect(
    null,
    { login }
)(Login) 