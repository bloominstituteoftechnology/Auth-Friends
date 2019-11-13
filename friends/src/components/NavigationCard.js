import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({friends,login,logout,  }) => {
    // const {login, register, logout } = props    

const onLogout = event => {
localStorage.removeItem('token');
// localStorage.removeItem('user')
}

// const goBack = event => {
// event.preventDefault();
// back.goBack()
// }

return (

<header >
    <nav className="nav-bar">
    
    {/* {back ? <Link onClick={goBack}>BACK</Link> : null} */}
    {friends ? <Link to='/friends'>Friends</Link> : null}
    {/* {addFriend ? <Link to='/newFriend'>Add Friend</Link> : null} */}
    {login ? <Link to='/'>Login</Link> : null}
    {/* {register ? <Link to='/register'>Register</Link> : null} */}
    {logout ? <Link to='/' onClick={onLogout}>Logout</Link> : null}
    </nav>

</header>

);

}


export default Nav;