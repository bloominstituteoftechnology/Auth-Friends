import React, { Component } from 'react'
import axios from 'axios'

const initialState = {
    login: {
      username: "",
      password: "",
    },
    error: "",
  };

export class Login extends Component {
    state = initialState;

      changeHandler = e=>{
          this.setState({login: {
              ...this.state.login, 
              [e.target.name]: e.target.value,
          },
          error: '',
        })
      }

      submitLogin = e=>{
          e.preventDefault();
          axios.post('http://localhost:5000/api/login', this.state.login)
            .then(res=>{
                console.log('login res: ', res);
                localStorage.setItem('token', JSON.stringify(res.data.payload))
                this.props.history.push('/friends');
                this.setState(initialState)
            }).catch(err=>{
                console.log(err)
                this.setState({error: err.response.data.error})
            })
      }

    render() {
        return (
        <div>
            <form onSubmit={this.submitLogin}>
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
                value={this.state.login.password}
                placeholder='Password'
                onChange={this.changeHandler}
                />
                <br/>
                <p style={{color: 'red'}}>{this.state.error}</p>
                <button>Login</button>
                
            </form>
        </div>
    )
    }
}

export default Login
