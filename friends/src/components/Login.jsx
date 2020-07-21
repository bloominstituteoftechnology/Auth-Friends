import React from 'react'
import { Button, TextField, CircularProgress } from '@material-ui/core';
import axiosWithAuth from '../utils/axiosWithAuth'

const initialState = {
  credentials: {
    username: "",
    password: ""
  },
  isLoading: false
}

class Login extends React.Component {
  state = {...initialState}
  
  handleChanges = e => {
    this.setState({
      ...this.state,
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    })
  }

  submit = e => {
    e.preventDefault()
    this.setState({...this.state, isLoading: true})
    axiosWithAuth().post("/api/login", {
      username: this.state.credentials.username,
      password: this.state.credentials.password
    })
    .then(res => {
      console.log(res)
      localStorage.setItem("token", res.data.payload)
      this.setState({...initialState})
      this.props.history.push("/friends-list")
    })
    .catch(err => {
      this.setState({...initialState})
      console.error(err)
    })
  }


  render() {
    return (
      <div>
        <h1>Welcome to the login!</h1>
        <form>
          <TextField onChange={this.handleChanges} label="Username" name="username"/>
          <TextField onChange={this.handleChanges} type="password" label="Password" name="password"/>
          <Button variant="contained" onClick={this.submit}>{this.state.isLoading ? <CircularProgress /> : <>Submit</>}</Button>
        </form>
      </div>
    )
  }
}

export default Login