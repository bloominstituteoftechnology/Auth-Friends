import React from 'react'

import {Link} from 'react-router-dom'

const HomePage =()=> {
    return(
        <div>
            <p> Friends App</p>


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
        