import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class Login extends React.Component {

    //set default state with empty creds obj
    state = {
        credentials: {
            username: '',
            password:''
        }
    };

    // Handlers below

    // when a change is made to our inputs, update our state object to that change
    handleChange = e => {
        console.log(e.target.value)
        this.setState({
          credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
          }
        });
      };

    // Login function that will prevent default, run our axiosWithAuth fn, post that auth and promise a redirect
    login = e => {
        e.preventDefault();
        // axiosWithAuth ==> ?? an axios instance; .post() ==> ?? promise
        axiosWithAuth()
          .post('/login', this.state.credentials)
          .then(res => {
              // save the returned token to localStorage ***
            localStorage.setItem('token', res.data.payload);
            // navigate your user to your FriendsList route *** aka pushing to our protected route
            this.props.history.push('/friends');
          })
          .catch(err => console.log(err));
      };
    
    render() {
    return (
        <div className="Login">
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
    )}// end render
}

export default Login;
