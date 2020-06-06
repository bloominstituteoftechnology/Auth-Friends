import React from 'react';

import axiosWithAuth from '../utils/axiosWithAuth';

class Login extends React.Component {
    state= {
        credentials: {
            username:"",
            password:""
        },
        isLoading:false
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.setState({...this.state, isLoading: true });

        axiosWithAuth().post('/api/login', this.state.credentials)
        .then(res => {
            window.localStorage.setItem('token', res.data.payload);
            this.setState({...this.state, isLoading: false });
            this.props.history.push('/protected');
        })
        .catch(err => {
            console.log(err)
            alert("Can't login");
            this.setState({...this.state, isLoading: false})
        })
    }


login = e => {
    e.preventDefault();
    axiosWithAuth
    .post("login", this.state.credentials)
    .then(res => {
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/protected");
        console.log(res)
    })
    .catch(err => 
        console.error("AA: Login.js: Login: err.message", err.message)
    );
};

render() {
    return(
        <div>
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
        </div>
    );
}
};

export default Login;