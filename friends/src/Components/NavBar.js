import React from 'react';
import {BrowserRouter as Link} from 'react-router-dom';

const NavBar = () => {

    return(
        <div>
            <ul>
                <li>
                    <Link to='/login'>Login</Link>
                </li> 
                <li>
                    <Link>Log Out</Link>
                </li>
                <li>
                    <Link to='/protected'>Protected Page</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;