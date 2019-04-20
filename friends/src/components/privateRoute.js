import React from 'react'
import {connect} from 'react-redux'
import {Route, Redirect} from 'react-router-dom'

const PrivateRoute = ({loggedIn, component: Component, ...data}) => {
    return (
        <Route
            {...data}
            render={props => (
                loggedIn
                ? <Component {...props} />
                : <Redirect to='/' />
            )}
        />
    )
}

//why do I need this????
const mapStateToProps = state => {
    return {
        loggedIn: state.loginReducer.loggedIn,
    }
}

//why do I need to connect?
export default connect(
    mapStateToProps, {})(PrivateRoute)