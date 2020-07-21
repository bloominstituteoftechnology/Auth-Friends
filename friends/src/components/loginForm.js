import React from 'react'
import axiosWithAuth from '../utils/axiosWithAuth' 


class LoginForm extends React.Component {
    state = {
        credentials: {
            username: '',
            password: '',
            
        }
    }

    handleChanges = e => {
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
                // console.log(res)
                localStorage.setItem('token', res.data.payload)
                this.props.history.push('/protected')
            })
            .catch(error => {
                console.log('There was an error', error)
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <input 
                    type='text'
                    name='username'
                    value={this.state.credentials.username}
                    onChange={this.handleChanges}
                    placeholder='username'
                    />
                    <input 
                    type='password'
                    name='password'
                    value={this.state.credentials.password}
                    onChange={this.handleChanges}
                    placeholder='password'
                    /><br/>
                    <button>Log in</button>
                </form>
            </div>
        )
    }
}


export default LoginForm
