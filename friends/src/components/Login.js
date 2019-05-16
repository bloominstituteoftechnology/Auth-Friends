import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: '',
        }
    }

changeHandler = e =>{
    this.setState({
        credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
        }
    });
};

toLogin= e => {
    e.preventDefault();
    this.props.login(this.state.credentials).then(() => {
        this.props.history.push("/protected");
     })

    
}

    render(){
        return(
            <div className="login" onSubmit={this.toLogin}>
            <form>
            Username: 
            <input
            type= "text"
            name= "username"
            value= {this.state.credentials.username}
            onChange={this.changeHandler} />
            Password: 
            <input
            type= "password"
            name= "password"
            value={this.state.credentials.password}
            onChange={this.changeHandler} />
            <button>Log In</button>
            </form>
            
            </div>
        )
    }

}

const mapStateToProps = state => ({
    loggingIn: state.loggingIn
}) 


export default connect(mapStateToProps, { login })(Login);