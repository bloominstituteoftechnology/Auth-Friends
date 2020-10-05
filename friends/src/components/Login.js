import React from "react"
import { axiosWithAuth } from "../api/axiosWithAuth"

class Login extends React.Component{
    state = {
        loginInfo:{
            username:"",
            password:""
        }

    }

    handleChanges = (e) =>{
        this.setState({
            loginInfo:{
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    login = (e) =>{
        e.preventDefault();
        axiosWithAuth()
        .post("/login", this.state.loginInfo)
        .then((res) =>{
            console.log("kh:Login.js: login: res", res);
            localStorage.setItem("token", res.data.payload);
            this.props.history.push("/protected")
        })
        .catch((err) =>{
            if(err.response) {
                console.err(
                    "Login.js: login failed: response from server: ", 
                    err.response.data
                )
            }
            else{
                console.error("Login.js: login failed: err ", err);
            }
        })
    }
    render() {
        return(
            <div>
                <form onSubmit={this.login}>
                    <input 
                    type="text"
                    name="username"
                    value={this.state.loginInfo.username}
                    onChange={this.handleChanges}
                    />
                     <input 
                    type="password"
                    name="password"
                    value={this.state.loginInfo.password}
                    onChange={this.handleChanges}
                    />
                    <button> Log in </button>

                </form>

            </div>
        )
    }
}

export default Login;