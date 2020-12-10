import React, {useState} from 'react'
import {axiosWithAuth} from '../components/utils/axiosWithAuth'

function Login(props) {
    const {username, password} =props
    const [credentials, setCredentials] =useState({
          username:"",
          password:"",
    })

  const handleChange = e => {
    setCredentials({
      credentials:{
        ...credentials,
        [e.target.name]: e.target.value
      }
    })
  }

  const login = e =>{
    e.preventDefault()
    axiosWithAuth()
    .post('/api/login', credentials)
    .then(res => {
      window.localStorage.setItem('token', res.data.payload)
      props.history.push('/protected')
    })
    .catch(err =>{
      console.log(err.message, 'Error in Login file')
    })
      
  }

   
    return (
      <div>
        <h1>Login Form component</h1>
        <form onSubmit={login}>
          <label>username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
            />

            <label>password</label>
            <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            />
            <button>Log in</button>
        </form>
      </div>

    )

  

}
export default Login