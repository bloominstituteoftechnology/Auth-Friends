import React from 'react'
import { Link } from 'react-router-dom'

import { Menu } from 'semantic-ui-react'

class NavBar extends React.Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

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

                <Menu.Item
                    name='login'
                    active={activeItem === 'login'}
                    onClick={this.handleItemClick}
                    as={Link}
                    to='/login'
                >
                    Login
                </Menu.Item>
            </Menu>
        )
    }
}

export default NavBar