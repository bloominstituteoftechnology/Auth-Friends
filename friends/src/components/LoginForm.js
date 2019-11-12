import React from 'react';


class LoginForm extends React.Component{
    
state = {
credentials: {
        username: '',
        password: ''
    },
}

render() {
    return (
        <div>
        <form >
            <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
            />
            <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
            />
            <button>Log in</button>
        </form>
        </div>
    );
    }
}



export default LoginForm;