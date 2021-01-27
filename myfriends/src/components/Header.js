import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function Header() {
    return (
        <div>
            <Link to = "/login">Login</Link><br></br>
            <Link >Logout</Link><br></br>
            <Link to = "/friendslist">List of Friends</Link>
        </div>
    )
}

export default Header
