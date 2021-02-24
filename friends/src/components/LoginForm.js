import React from 'react'
import axios from "axios";

class Login extends React.Component {
    state = {
        creds: {
            username: "",
            password: ""
        },
        error: "",
    }

    login = event => {
        event.preventDefault()
        //pass axios post call here, using token retrieved to set item in localStorage.

    }

    handleChange = event => {
        this.setState({
            creds: {
                ...this.state.creds,
                [event.target.name]: event.target.value,
            },
            error: "",
        })
    };

    render() {
        return(
            <div>
                <form onSubmit={this.login} >
                    <input
                    type="text"
                    name="username"
                    value={this.state.creds.username}
                    onChange={this.handleChange}
                    />
                    <input
                    type="password"
                    name="password"
                    value={this.state.creds.password}
                    onChange={this.handleChange}
                    />

                    <p>{this.state.error}</p>

                    <button> Log In </button>
                </form>
            </div>
        )
    }
}
