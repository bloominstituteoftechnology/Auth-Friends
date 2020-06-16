import React from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'



class loginForm extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
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

    handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('http://localhost:5000/api/login', this.state.credentials)
        .then(res => {
            console.log(res);
            window.localStorage.setItem('token', res.data.payload);
            this.props.history.push('/friends');
        })
        .catch(err => console.log(err))
    }

    render(){
    return(
        <div className='login'>
            <form>
                <input
                    type='text'
                    name='username'
                    value={this.state.credentials.username}
                    onChange={this.handleChanges}
                />
                
                <input
                    type='password'
                    name='password'
                    value={this.state.credentials.password}
                    onChange={this.handleChanges}
                />
                <button>Login</button>
            </form>
        </div>
        )
    }
}


export default loginForm