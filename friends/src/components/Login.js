import React from 'react';
import { axiosWithAuth } from '../axiosWithAuth';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: '',
        }
    }
    handleChange = e => {
        this.setState({credentials:{
            ...this.state.credentials,
            [e.target.name]: e.target.value
        }})
    }
    logging = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/api/login', this.state.credentials)
            .then(res => {
                console.log(res);
                localStorage.setItem('token', JSON.stringify(res.data.payload));
                this.props.history.push('/friends');
            
            })
            .cathc(err =>console.log(err.response));
        }
        render(){
            return(
                <>
                <form>
                    <input
                    type='text'
                    name='username'
                    placehold='username'
                    value={this.state.credentials.username}
                    onChange={this.handleChange}
                    />
                    <input
                    type='password'
                    name='password'
                    placeholder='password'
                    value={this.state.credentials.password}
                    onChange={this.handleChange}
                    />
                    <button>Log In</button>
                </form>
                </>
            )
        }
    }
    
export default Login;