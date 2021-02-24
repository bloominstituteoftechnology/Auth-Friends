import React from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';

class Login extends React.Component {
    state ={
        credentials: {
            username: 'Lambda School',
            password: 'i<3Lambd4',
        },
        error: '',
        loading: false,
    }

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value,
            },
            error: '',
        })
    }

    login = e => {
        e.preventDefault();
        axios
            .post("http://localhost:5000/api/login", this.state.credentials)
            .then((res) => {
                // console.log(res)
                localStorage.setItem("token", JSON.stringify(res.data.payload))
                this.props.history.push("/friends")
            })
            .catch((err) => {
                // console.log({err})
                this.setState({error: err.response.data.error})
            })
    }

    render() {
        {this.props.fetchingData && (
            <div className="key spinner">
              <Loader type="Puff" color="#204963" height="60" width="60" />
              <p>Loading Data</p>
            </div>
          )}
        return(
            <div>
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
                    <p style={{color:'red', fontSize:"12px"}}>{this.state.error}</p>
                    <button type="submit">Log In</button>
                   
                </form>
            </div>
        )
    }
}

export default Login;