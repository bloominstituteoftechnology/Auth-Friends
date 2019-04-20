import React, {Component} from 'react'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import {connect} from 'react-redux'

import PrivateRoute from './components/privateRoute'
import Login from './components/login'
import FriendsList from './components/friendsList'

import {loginStatus} from './actions'

class Routes extends Component {
    constructor() {
        super()
        this.state = {
            loggedIn: false,
        }
    }
    componentDidMount = () => {
        const token = localStorage.getItem('token')
        token && this.props.loginStatus(token)
            .then(res => this.setState({loggedIn: res}))
    }
    render = () => {
        return (
            <Router>
                <Route exact path='/' component={Login}/>
                <PrivateRoute exact path='/friends' loggedIn={this.state.loggedIn} component={FriendsList}/>
            </Router>
        )
    }
}

const mapStateToProps = state => ({loggedIn: state.loginReducer.loggedIn})

export default connect(mapStateToProps, {loginStatus})(Routes)