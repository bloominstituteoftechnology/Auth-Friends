import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({login, register, logout }) => {
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
    {login ? <Link to='/'>LOGIN</Link> : null}
    {register ? <Link to='/register'>REGISTER</Link> : null}
    {logout ? <Link to='/' onClick={onLogout}>LOGOUT</Link> : null}
    </nav>

</header>

);

}


export default Nav;