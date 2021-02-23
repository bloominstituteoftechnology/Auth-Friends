import React from 'react'
import {Link} from 'react-router-dom';

function Home() {
    return (
        <div className='home'>
            <h1>HOME</h1>
            <Link to='/login'><button>Login</button></Link>
        </div>
    )
}

export default Home
