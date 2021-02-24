import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import {axiosWithAuth} from "../utils/axiosWithAuth"

function Header() {
    const logout = () => {
        axiosWithAuth()
          .post('/login')
          .then(res=>{
            localStorage.removeItem('token');
            window.location.href =  '/login';
          })
          .catch(err=>{
            console.log(err);
          })
      };
    return (
        <div>
            <Link to = "/login">Login</Link><br></br>
            <Link onClick = {logout}>Logout</Link><br></br>
            <Link to = "/protected">List of Friends</Link>
        </div>
    )
}

export default Header
