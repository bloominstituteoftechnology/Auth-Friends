import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { loggedStatus } from '../actions'

import { Menu } from 'semantic-ui-react'

class NavBar extends React.Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        const { loggedStatus, isLoggedIn } = this.props

        const logOut = () => {
            localStorage.removeItem('token')
            loggedStatus()
        }

        return (
            <Menu fluid widths={3}>
                <Menu.Item
                    name='home'
                    active={activeItem === 'home'}
                    onClick={this.handleItemClick}
                    as={Link}
                    to='/'
                >
                    Home
                </Menu.Item>
                
                <Menu.Item
                    name='add-friend'
                    active={activeItem === 'add-friend'}
                    onClick={this.handleItemClick}
                    as={Link}
                    to='/add-friend'
                >
                    Add Friend
                </Menu.Item>
                
                {!isLoggedIn ? (
                    <Menu.Item
                        name='login'
                        active={activeItem === 'login'}
                        onClick={this.handleItemClick}
                        as={Link}
                        to='/login'
                    >
                        Log In
                    </Menu.Item>
                ) : (
                    <Menu.Item
                        name='logout'
                        active={activeItem === 'logout'}
                        onClick={logOut}
                        as={Link}
                        to='/login'
                    >
                        Log Out
                    </Menu.Item>
                )}
            </Menu>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.isLoggedIn
    }
}

export default connect(mapStateToProps, { loggedStatus })(NavBar)