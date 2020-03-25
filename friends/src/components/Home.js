import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <nav>
            <Link to='friends'>Friends</Link>
        </nav>
    );
}