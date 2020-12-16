import React from 'react';
// import {axiosWithAuth} from '../Utils/axiosWithAuth';
import {BrowserRouter as Router, Link} from 'react-router-dom';

const NavBar = () => {

    const logout = () => {
        
        localStorage.clear();
        window.location.href = "/login";
        
        // axiosWithAuth()
        //   .post("/logout", {
        //     userToken:localStorage.getItem('token')
        //   })
        //   .then((res) => {
        //     localStorage.removeItem("token");
        //     window.location.href = "/login";
        //   })
        //   .catch((err) => console.log(err));
    
      };

    return(
    <Router>
        <div>
            <ul>
                <li>
                    <Link onClick={logout}>Log Out</Link>
                </li>
            </ul>
        </div>
    </Router>
    )
}

export default NavBar;