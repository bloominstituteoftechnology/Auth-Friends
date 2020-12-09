import React, {useState} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth';

function Login(props) {

const { username, password } = props;

const [state, setState] = useState({
            username: '',
            password: ''
    })

    let handleChange = e => {
        e.preventDefault()
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value
        })

    }



    const login = (e) => {
        e.preventDefault()
        //logs into the server
        axiosWithAuth().post("/api/login", state)
        .then(res => {
          console.log('al: Login.js: login: res: ', res)
          window.localStorage.setItem('token', res.data.payload)
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
                value={username}
                onChange={handleChange}
                />
                <input 
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  />
                  <button>Log In</button>
            </form>
        </div>
    )
}

export default Login
