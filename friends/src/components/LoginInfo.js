import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../actions';
import { Redirect } from 'react-router'


class LoginInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: undefined,
            loggedOut: false
        }
    }

    componentDidMount() {
        if (this.props.auth.isAuthed) {
            let user = this.props.auth.userInfo;
            console.log(typeof user.username, typeof user.token)
            this.setState({...this.state, userInfo: user});
        } else {
            this.setState({...this.state, userInfo: undefined});
        }
      }
    logout(event) {
        // event.preventDefault();
        this.props.logout();
        this.setState({...this.state, userInfo: undefined})
        setTimeout(() => {
            this.props.parent.props.history.push("/public");
        }, 500)
    }
    render() {
        
        
            if (this.state.userInfo !== undefined ) {
                return (<div className="loginInfo">
                    Logged in as: {this.state.userInfo.username}<br />
                    <a href="#" onClick={this.logout.bind(this)}>Logout</a>
                </div>)
            } else {
                return <div className="loginInfo">
                    <Link to="/login">Login</Link><br />
                    Register
                </div>
            }
        
    }
}

const mapStateToProps = state => {
    return {
        auth: state.friendsReducer.auth
    }
}

export default connect(
    mapStateToProps,
    {
        logout
    }
)(LoginInfo)