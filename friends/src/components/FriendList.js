import React from 'react';

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

      /*
    1. connect to server with username/passowrd
    2. store the token that gets passed on successful login
    3. output an error when we have an unsuccessful login
  */

    login = e => {
        e.preventDefault();
        // login to sever
        // axios.post to 
    }
}