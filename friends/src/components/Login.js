import React, { useState } from 'react'
import { axiosWithAuth } from '../util/axiosWithAuth'
import { useHistory } from 'react-router-dom'


const Login = () => {
//hook for login data
  const [login, setLogin] = useState({
    username:'',
    password:'',
  })
//boolean hook for whether it isLoading
  const [isLoading, setIsLoading] = useState(false)

//this will be used to push us to /friends route after being logged in
// in the handleSubmit
const history = useHistory()
//
  const handleChange = (e) => {
    e.preventDefault()
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    })
  }
//handleSubmit function
  const handleSubmit = (e) => {
    e.preventDefault()
    //sets it loading
    setIsLoading(true)
    //axiosWithAuth call
    axiosWithAuth()
    //posting our login data to the login api
      .post('/api/login', login)
      .then((res) => {
        //setting the token so were authorized to access content
        localStorage.setItem('token', (res.data.payload))
        //sets the form blank again
        setLogin({
          username:'',
          password:'',
        })
        //pushes us to the /friends route
        history.push('/friends')

      })
      .catch(err => console.log(err)) 
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