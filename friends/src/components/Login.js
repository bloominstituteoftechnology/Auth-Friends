import React from 'react';
import { axiosWithAuth } from "../utils/axiosWithAuth";

class Login extends React.Component {
    state = {
        userInfo: {
            username: "",
            password: ""
        }
    };

    handleChanges = e => {
        this.setState({
            userInfo: {
                ...this.state.userInfo,
                [e.target.name]: e.target.value
            }
        });
    };
    handaleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/api/login', this.state.userInfo)
            .then(res => {
                localStorage.setItem("token", res.data.payload);
                this.props.history.push('/protected');
            })
            .catch(err => {
                localStorage.removeItem("token");
                console.log('invalid login: ', err);
            });
    };

    render() {
        return ( 
            <div>
                <form onSubmit = {this.handaleSubmit}>
                    <input 
                        type = "text"
                        name = "username"
                        placeholder = "Username"
                        value = {this.state.userInfo.username }
                        onChange = {this.handleChanges}
                    />

                    <input
                        type = "password"
                        name = "password"
                        placeholder = "Password"
                        value = {this.state.userInfo.password}
                        onChange = {this.handleChanges}
                    /> 
                    <button> LogIn </button>

                </form> 
            </div>
        )
    }
}
export default Login;