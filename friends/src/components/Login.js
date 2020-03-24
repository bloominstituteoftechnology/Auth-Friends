import React from "react"
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
    handleChange = event => {
        this.setState({ 
            credentials: {
            ...this.state.credentials,
            [event.target.name]: event.target.value
        }})
        console.log(this.state.credentials)
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({...this.state, isLoading: true});

        axiosWithAuth().post('/api/login', this.state.credentials)
        .then(response => {
            console.log(response);
            window.localStorage.setItem('token', response.data.payload);

            this.setState({...this.state, isLoading: false});
            this.props.history.push('/protected')
        })
        .catch(error => console.log(error.response));
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name="username" onChange={this.handleChange}/>
                    <input name="password" onChange={this.handleChange}/>
                    <button>LOGIN</button>
                </form>
                {this.state.isLoading && <div>Login</div>}
            </div>
        )
    }
}

export default Login;