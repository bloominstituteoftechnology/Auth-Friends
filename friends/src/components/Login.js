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
   		return "";
    }

    handleSubmit = e => {
    	return "";
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