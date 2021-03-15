import React from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';

class Login extends React.Component {

    state = {
        credentials: {
            username: '',
            password: '',
            isLoading: false
        }
    }

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value,
            }
        })
    };

    login = e => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/login", this.state.credentials)
          .then(res => {
            console.log(res);
            localStorage.setItem("authToken", res.data.payload);
            this.props.history.push("/protected");
          })
          .catch(err => console.log(err));
    };

    loading = e => {
        this.setState({
           credentials: {
               ...this.state.credentials,
               isLoading: !this.state.isLoading

               
           }
        })
    }

    

    render(){
        return(
            <div>
                <form onSubmit={this.login}>

                    <label>Username:</label>
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

                    <button onClick={this.loading}>Login</button>

                    {this.state.isLoading === true && <Loader />}

                </form>
            </div>
        )
    }
};

export default Login;