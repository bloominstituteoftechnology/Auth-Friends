import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'>
            <h1>Collect Your Friends!</h1>
            <div className='nav'>
                <Link to='/login'>Login</Link>
                <Link to='/friends'>Your Friends</Link>
            </div>
        </div>
    )
}

export default Header