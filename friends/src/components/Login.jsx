import React from 'react'
import { Button, TextField } from '@material-ui/core';
import axios from 'axios';

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  }

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
    axios.post("http://localhost:5000/api/login", {
      username: 'Lambda School',
      password: '1<3Lambd4'
    })
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.error(err)
    })
  }

  render() {
    return (
      <div>
        <h1>Welcome to the login!</h1>
        <form>
          <TextField onChange={this.handleChanges} label="Username"/>
          <TextField onChange={this.handleChanges} type="password" label="Password"/>
          <Button variant="contained">Submit</Button>
        </form>
      </div>
    )
  }
}

export default Login