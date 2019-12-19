import React from 'react';
import axioswithAuth from '../utilities/axioswithAuth';


class LogInForm extends React.Component {
    state = {
        credentials: {
            username: '',
            password: '',

        },
        isFetching: false
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
    e.preventDefault();
    this.setState({
      isFetching: true
    });
    axioswithAuth()
      .post('/login', this.state.credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        this.props.history.push('/friends');
      })
      .catch(err => console.log(err));
  };
    render(){
        return(

            <div>
                <form onSubmit = {this.login}>
                
                Username:
                <input
                    name = 'username'
                    type = 'text'
                    value = {this.state.credentials.username}
                    onChange = {this.handleChange}
                />

               Password:
                <input
                    name = 'password'
                    type = 'password'
                    value = {this.state.credentials.password}
                    onChange = {this.handleChange}
                />

                <button> Sign In </button>

                {this.state.isFetching && 'logging in'}
                </form>
            </div>
        )
    } 
}

export default LogInForm;