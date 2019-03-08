import React from 'react';
import { connect } from 'react-redux';
import { login, fetchFriends } from '../actions';


class LogIn extends React.Component{
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    handleChange = e => {
        this.setState({
            credentials:{
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        this.props.login(this.state.credentials)
            .then(() => {
                this.props.history.push('/friendslist');
            })
            .then(() => {
                this.props.fetchFriends();
            })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.login}>
                    <input
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                        placeholder="...name..."
                    />

                    <input
                        type="password"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                        placeholder="...password..."
                    />
                    <button>Log In</button>
                    {this.props.loggingIn ? (
                            <h3>Loading...</h3>
                        ) : (
                            null
                        )
                    }
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loggingIn: state.loggingIn,
    error: state.error,
    friends: state.friends 
})

export default connect(mapStateToProps, { login, fetchFriends }) (LogIn);