import React from 'react';
import { login } from '../actions/actions';
import { connect } from 'react-redux';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };
    
    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        this.props.login(this.state.credentials).then(res => {
            if (res) {
                this.props.history.push('/protected');
            }
        });
    };

    render() {
        return (
            <div>
            <h1>Login Form</h1>
            <form onSubmit={this.login} >
                <input
                    onChange={this.handleChange}
                    value={this.state.credentials.username}
                    label='username'
                    type='text'
                    name='username'
                    placeholder='username'
                />
                <br></br>
                <input
                    onChange={this.handleChange}
                    value={this.state.credentials.password}
                    label='password'
                    type='password'
                    name='password'
                    placeholder='enter password'
                />
                <br></br>
                <button>{this.props.loggedIn ? <h2>Loading</h2> : 'Send'}</button>
            </form>
        </div>
        );
    }
}

const mapStateToProps = state => ({
    error: state.error,
    loggedIn: state.loggedIn
});

export default connect( mapStateToProps, { login })(Login);