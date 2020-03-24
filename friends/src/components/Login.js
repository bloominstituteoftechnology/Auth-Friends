import React from "react"
import { render } from "react-dom";
import axios from "axios"
import { axiosWithAuth } from "../utils/axiosWithAuth";

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoading: false,
            credentials: {
                username: '',
                password: ''
            }
        }
    }

    handleChange = e => {
   		this.setState({credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
        }});
        console.log(this.state.credentials);
    }

    handleSubmit = e => {
    	e.preventDefault();
        this.setState({...this.state, isLoading: true});

        axiosWithAuth().post('/api/login', this.state.credentials)
        .then(res => {
            //Give localStorage the token
            window.localStorage.setItem('token', res.data.payload);
            this.setState({...this.state, isLoading: false});
            //Send logged in user to protected page
            this.props.history.push('/protected');
        })
        .catch(err => {
            console.log(err);
            alert("Unable to sign in");
            this.setState({...this.state, isLoading: false});
        })

    }   

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name="username" onChange={this.handleChange}/>
                    <input name="password" onChange={this.handleChange}/>
                    <button>Login</button>
                </form>
                {this.state.isLoading && <div>Logging in</div>}
            </div>
        )
    }
}

export default Login