import React from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

class Login extends React.Component {
    state= {
        credentials: {
            username:'',
            password:''
        },
        isLoading:false
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
        this.setState({...this.state, isLoading: true });

        axiosWithAuth().post('/api/login', this.state.credentials)
        .then(res => {
            localStorage.setItem('token', JSON.stringify(res.data.payload));
            this.setState({...this.state, isLoading: false });
            this.props.history.push('/friends-list');
        })
        .catch(err => {
            console.log(err)
            alert("Can't login");
            this.setState({...this.state, isLoading: false})
        })
    }


    render() {
        return(
            <div>
                <h2>Login</h2>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <input  
                        type="text"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <button>Login</button>
                </form>
                {this.state.isLoading && <div><h3>Logging in</h3></div>}
            </div>
        );
    }
};

export default Login;