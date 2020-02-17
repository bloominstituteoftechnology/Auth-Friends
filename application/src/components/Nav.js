import React, { useState, useContext } from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { StateContext } from '../contexts';

const Nav = () => {
    const { state } = useContext(StateContext);


    return (
        <div>
            <nav className='ui secondary  menu'>
                <NavLink to='/' className='item'>
                    Home
                </NavLink>

                <div className='right menu'>
                    <NavLink to='/login' className="ui item">{!state.isLoggedIn ? 'Login' : 'Logout'}</NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Nav;
