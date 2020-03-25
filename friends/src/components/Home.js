import React from 'react';
import { NavLink } from 'react-router-dom';

export const Home = () => {
    return (
        <nav>
            <NavLink to='friends'>Friends</NavLink>
            <NavLink to='addFriend'>Add Friends</NavLink>
        </nav>
    );
}