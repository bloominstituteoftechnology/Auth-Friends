import React from 'react'
import axios from 'axios'


class Login extends React.Component {
    state = {
        credentials: {
            username: "",
            password: ""
        }
    }

    handleChange = event => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [event.target.name]: event.target.value
            }
        })
    }

    login = event => {
        event.preventDefault();
        axios
            .post("http://localhost:5000/api/login", this.state.credentials)
            .then((res) => {
                localStorage.setItem("token", res.data.payload);
                this.props.history.push("/protected")
                console.log("api data login working", res)
            })
            .catch((err) => console.log(err))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                        <input
                            type="text"
                            name="username"
                            placeholder="username"
                            value={this.state.credentials.username}
                            onChange={this.handleChange}
                        />
                        <input
                            type="text"
                            name="password"
                            placeholder="password"
                            value={this.state.credentials.password}
                            onChange={this.handleChange}
                        />
                        <input
                            type="submit"
                        />
                </form>
            </div>
        )
    }


}

export default Login