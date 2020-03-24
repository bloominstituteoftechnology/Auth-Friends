import React from 'react'
import Axios from 'axios'

class Login extends React.Component {
    state = {
        credentials: {
        username: '',
        password: ''
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

    handleSubmit = e => {
        e.preventDefault();
        //post request sending credentials to api
        Axios.post('http://localhost:5000/api/login', this.state.credentials)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            //navigate user to proteced landing page
            this.props.history.push('./FriendsList')
    })
        .catch(err => console.log(err))
    }
    
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                    type='text'
                    name='username'
                    value={this.state.credentials.username}
                    onChange={this.handleChange}
                    />
                     <input
                    type='text'
                    name='password'
                    value={this.state.credentials.password}
                    onChange={this.handleChange}
                    />
                    <button>Log in</button>
                   
                </form>
            </div>
        )
    }
    
}

export default Login