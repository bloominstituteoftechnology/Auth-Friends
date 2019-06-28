import React from 'react'
import logo from '../logo.png'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div className="App-wrapper">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Welcome to the Friends App! <span role='img' aria-label='fire'>🔥</span>
            </p>
            <Link
                to='/login'
                className="App-link"
            >
                Login now! <span role='img' aria-label='rocket'>🚀</span>
            </Link>
        </div>
    )
}

export default HomePage