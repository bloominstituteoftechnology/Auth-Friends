import React from 'react';
import Loader from "react-loader-spinner";
import axiosWithAuth from '../axios/index';



class LoginForm extends React.Component{
    
state = {
credentials: {
        username: '',
        password: ''
    },
    isLoggedIn: false
};

handleChange = e => {
this.setState({
    credentials: {
    ...this.state.credentials,
    [e.target.name]: e.target.value
    }
});
};

onSubmit = e => {
    e.preventDefault(); 
    axiosWithAuth()
    .post ('/login', this.state.credentials)
    .then(response =>{
        localStorage.setItem("token", response.data.payload);
        this.props.history.push('/friends')
        this.setState({ ...this.state, isLoggedIn: true });
    }); 
};

componentDidMount() {
if (localStorage.getItem("token")) {
    this.setState({ ...this.state, isLoggedIn: true });
} else {
    this.setState({ ...this.state, isLoggedIn: false });
}
}

render() {
    return (
        <div>
   
    <h2>{this.state.isLoggedIn ? "Logged In" : "Please Login"}</h2>
   

        <form onSubmit={this.onSubmit}>
        {this.props.fetchingData && (
          <div className="key spinner">
            <Loader type="Puff" color="#204963" height="60" width="60" />
            <p>Loading...</p>
          </div>
        )}
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