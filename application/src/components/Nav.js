import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Nav = props => {
    const [active, setActive] = useState('home');

    const handleItemClick = e => {
        e.preventDefault();
        setActive(e.target.name);
    };

    const { activeItem } = active;

    return (
        <div>
            <Menu pointing secondary>
                <Menu.Item
                    active={activeItem === 'home'}
                    onClick={e => handleItemClick(e)}
                >
                    <NavLink to='/'>Home</NavLink>
                </Menu.Item>
                <Menu.Item
                    name='friends'
                    active={activeItem === 'friends'}
                    onClick={e => handleItemClick(e)}
                >
                    <NavLink to='/friends'>Friends</NavLink>
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item
                        active={activeItem === 'login'}
                        onClick={e => handleItemClick(e)}
                    >
                        <NavLink to='/login'>
                            {!props.isLoggedIn ? 'Login' : 'Logout'}
                        </NavLink>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        </div>
    );
};

export default Nav;
