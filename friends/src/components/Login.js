import React from 'react';
import axios from 'axios';

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

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
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/friends");
      })
      .catch(err => console.log({err}))
  }
  render(){
    return (
      <div className='uk-width-medium uk-card uk-card-default uk-card-body'>
        <form onSubmit={this.login}>
          <fieldset className='uk-fieldset'>

            <legend className='uk-legend uk-text-center'>Auth Friends</legend>

            <div className='uk-margin'>
              <input
                className='uk-input'
                type='text'
                name='username'
                onChange={this.handleChange}
                value={this.state.credentials.username}
                placeholder='Username' />
            </div>
            <div className='uk-margin'>
              <input
                className='uk-input'
                type='password'
                name='password'
                onChange={this.handleChange}
                value={this.state.credentials.password}
                placeholder='Password' />
            </div>
            <div className='uk-margin'>
              <button className='uk-button uk-button-primary uk-width-1-1'>Login</button>
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}
export default Login;