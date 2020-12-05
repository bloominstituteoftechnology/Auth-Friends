import React, {useState} from 'react'

function Login() {

const [state, setState] = useState([{
            username: '',
            password: ''
    }])

    const handleChange = e => {
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value
        })

    }



    const login = e => {
        e.preventDefault()
        //logs into the server

    }

    return (
        <div>
            <form onSubmit={login}>
                <input
                type="text"
                name="username"
                value={state.username}
                onChange={handleChange}
                />
                <input 
                  type="text"
                  name="password"
                  value={state.password}
                  onChange={handleChange}
                  />
                  <button>Log In</button>
            </form>
        </div>
    )
}

export default Login
