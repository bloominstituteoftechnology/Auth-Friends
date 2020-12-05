import React, {useState} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth';


function Login() {

const [state, setState] = useState({
            username: '',
            password: ''
    })

    const handleChange = e => {
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value
        })

    }



    const login = (e,props) => {
        e.preventDefault()
        //logs into the server
        axiosWithAuth().post("http://localhost:5000/api/login", state)
        .then(res => {
          console.log('al: Login.js: login: res: ', res)
          localStorage.setItem('token', res.data.payload)
          props.history.push('/protected')
        })
        .catch(err => {
          console.error(err.response)
        })

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
