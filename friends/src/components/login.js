import React, { Component } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth';

export default class Login extends Component {

    state = {
        credentials: {
            username: '',
            password: ''
        },
        isFetching: false
    }

    handleChange = (e)=> {
        this.setState({
          
            credentials: {
                ...this.state.credentials,
                [e.target.name]:e.target.value
            }
        })
    }
    
    handleSubmit = (e)=> {
        e.preventDefault();
        this.setState({
            isFetching: true
        });
        axiosWithAuth().post('/login', this.state.credentials)
        .then(res => {
            console.log('res', res)
         localStorage.setItem('token', res.data.payload)
         this.props.history.push('/friends');
         this.clearForm();

         })

            
      
        .catch( err => {
            console.log('err', err.response.data.error);
            this.props.setAlert(err.response.data.error);
            this.clearForm();
            localStorage.removeItem('token');
            
        })
    }

    clearForm = () => {
        this.setState({
            credentials: {
                username: '',
                password: ''
            },
            isFetching: false
        });

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="username" value = {this.state.credentials.username} 
                    placeholder="Username" onChange={this.handleChange}/>
                    <input type="password" name="password" value={this.state.credentials.password} 
                    placeholder="Password" onChange={this.handleChange} />
                    <button type="submit">Login</button>
                    {this.isFetching && '   logging in .....'}

                </form>
                
            </div>
        )
    }
}

