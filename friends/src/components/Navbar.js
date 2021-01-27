import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className="nav-links">
            <Link to="/login">Login</Link>
            <Link to="/protected">Friends List</Link>
        </div>
    )
}

export default Navbar
