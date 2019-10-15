import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: '',
            isLoading: true
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
        e.preventDefault();
        axiosWithAuth()
            .post('api/login', this.state.credentials)
            .then(res => {
                localStorage.setItem('token', res.data.payload)
                this.props.history.push('/protected')
            })
    }

    componentDidMount() {
        this.setState({ isLoading: false })
    }

    render() {
        return(
            <div>
                {this.state.isLoading ? (
                    <Loader type="Rings" color="#somecolor" height={80} width={80} />
                ) : (
                <form>
 
                        
                    
                    <input
                        type='text'
                        name='username'
                        placeholder='Username'
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type='text'
                        name='password'
                        placeholder='Password'
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <button>Log In</button>
                </form>
                )}
            </div>
        )
    }
} 

export default Login;