import React, { Component } from 'react'

export class Login extends Component {
    state = {
        login: {
          username: "",
          password: "",
        },
        error: "",
      };

    render() {
        return (
        <div>
            <form>
                <input
                type='text'
                name='username'
                value={this.state.login.username}
                placeholder='Username'
                onChange={this.changeHandler}
                />
                <input
                type='text'
                name='password'
                value={this.state.login.username}
                placeholder='Password'
                onChange={this.changeHandler}
                />
            </form>
        </div>
    )
    }
}

export default Login
