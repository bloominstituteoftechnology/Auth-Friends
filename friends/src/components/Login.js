import React from 'react'; 

class Login extends React.Component {
    state = {
        credentials: {
            username: "", 
            password: ""
        }
    }; 

    onChange = (e) => {
        this.setState({
            credentials: {
                ...this.state.credentials, 
                [e.target.name]: e.target.value
            }
        }); 
    }; 



    render() {
        return (
            <div>
                <form>
                    <input 
                    type="text"
                    name="username"
                    placeholder="username"
                    value={this.state.credentials.username}
                    onChange={this.onChange}
                    /> 
                    <input
                    type="text"
                    name="password"
                    placeholder="password"
                    value={this.state.credentials.password}
                    onChange={this.onChange}
                    /> 
                    <button>Login</button>
                </form>
            </div>
        )
    }
}

export default Login; 