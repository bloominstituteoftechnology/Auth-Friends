import React, { useState } from 'react'
import { axiosWithAuth } from '../util/axiosWithAuth'
import { useHistory } from 'react-router-dom'


const Login = () => {

  const [login, setLogin] = useState({
    username:'',
    password:'',
  })

  const [isLoading, setIsLoading] = useState(false)

const history = useHistory()

  const handleChange = (e) => {
    e.preventDefault()
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    axiosWithAuth()
      .post('/api/login', login)
      .then((res) => {
        localStorage.setItem('token', (res.data.payload))

        setLogin({
          username:'',
          password:'',
        })
        history.push('/friends')

      })

      .catch(err => console.log(err))
      setLogin({username: '', password:''})   
      setIsLoading(false)

  }

return (
  <div>
    <form onSubmit={handleSubmit}>
      <input 
          type='text'
          name='username'
          placeholder='username'
          value={login.username}
          onChange={handleChange}
      />
      <input 
          type='password'
          name='password'
          placeholder='password'
          value={login.password}
          onChange={handleChange}
      />
      <button type='submit'>Log in</button>
      {isLoading &&  (
        <div>Loading ...</div>
      )}
  </form>
</div>
)
}
export default Login