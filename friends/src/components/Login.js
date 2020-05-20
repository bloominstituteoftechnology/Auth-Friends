import React from 'react';
import {axiosWithAuth} from '../utilities/axiosWithAuth';

class Login extends React.Component {
    constructor(){
        super();
        this.state = {
            isLoading: false,
            credentials: {
                username: '',
                password: '',
            }
        }
    }
    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.credentials

            }
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({...this.state, isLoading: true});

    axiosWithAuth().post('/api/login', this.state.credentials)
        .then(res => {
            window.localStorage.setItem('token', res.data.payload);
            this.setState({...this.state, isLoading: false});
            this.props.history.push('./protected');
        })
        .catch(err => {console.log(err)})
    }

    render(){
        return(
            <div className='login'>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                    name='username'
                    placeholder='friend name'
                    onChange={this.handleChange}/>
                    <input
                    name='password'
                    placeholder='password'
                    onChange={this.handleChange}/>

                </form>
                <button>Log me in</button>
            </div>
        )
    }
}

export default Login;