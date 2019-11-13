import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({friends, newFriend, logout, login }) => {
    

const onLogout = event => {
localStorage.removeItem('token');
// localStorage.removeItem('user')
}

return (

<header >
    <nav className="nav-bar">
    

    {friends ? <Link to='/friends'>Friends</Link> : null}
    {newFriend ? <Link to='/newFriend'>Add Friend</Link> : null}
    {login ? <Link to='/'>Login</Link> : null}
    {/* {register ? <Link to='/register'>Register</Link> : null} */}
    {logout ? <Link to='/' onClick={onLogout}>Logout</Link> : null}
    </nav>

</header>

);

}


export default Nav;