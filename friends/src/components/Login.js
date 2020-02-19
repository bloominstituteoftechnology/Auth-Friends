import React, { useState } from "react"
import axiosWithAuth from "../utils/axiosWithAuth";

function Login(props) {
  
  const [data, setData] = useState({})

  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = e => {
    e.preventDefault()
    axiosWithAuth()
      .post("/login", data)
      .then(res => {
        localStorage.setItem("token", res.data.payload)
        props.history.push('/myfriends')
      })
      .catch(err => console.error(err))
  }

  return (
    <form onSubmit={onSubmit}>
      <input type = "text" name="username" placeholder="username" value={data.username} onChange={handleChange}></input>
      <input type = "password" name="password" placeholder="password" value={data.password} onChange={handleChange}></input>

      <button type="submit"> Log In </button>
    </form>
  )
}

export default Login