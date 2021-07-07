import React from 'react'
import { Button, TextField, CircularProgress } from '@material-ui/core';
import axiosWithAuth from '../utils/axiosWithAuth'

const initialState = {
  name: "",
  age: "",
  email: "",
  isLoading: false
}

class AddFriend extends React.Component {
  state = {...initialState}

  handleChanges = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  submit = e => {
    e.preventDefault()

    axiosWithAuth().post("/api/friends", this.state)
    .then(res => {
      console.log(res)
      this.setState({...initialState})
      console.log(this)
      this.props.history.push("/friends-list")
    })
    .catch(err => {
      this.setState({...initialState})
      console.error(err)
    })
  }

  render() {
    return (
      <form>
        <TextField onChange={this.handleChanges} label="Name" name="name" />
        <TextField onChange={this.handleChanges} label="Age" name="age" />
        <TextField onChange={this.handleChanges} label="Email" name="email" />
        <Button variant="contained" onClick={this.submit}>{this.state.isLoading ? <CircularProgress /> : <>Submit</>}</Button>
      </form>
    )
  }
}

export default AddFriend