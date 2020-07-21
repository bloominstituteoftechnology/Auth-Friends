import React from 'react'
import { v4 as uuid } from 'uuid'
import { Button, TextField, CircularProgress } from '@material-ui/core';
import axiosWithAuth from '../utils/axiosWithAuth'

const initialState = {
  friend: {
    id: null,
    name: null,
    age: null,
    email: null
  },
  isLoading: false
}

class AddFriend extends React.Component {
  state = {...initialState}

  handleChanges = e => {
    this.setState({
      ...this.state,
      friend: {
        ...this.state.friend,
        [e.target.name]: e.target.value
      }
    })
  }

  submit = e => {
    e.preventDefault()
    this.setState({...this.state, friend: {...this.state.friend, id: uuid()}, isLoading: true}) // set the loading state and assign uuid
    axiosWithAuth().post("/api/friends", this.state.friend)
    .then(res => {
      console.log(res)
      // console.log(res)
      // localStorage.setItem("token", res.data.payload)
      // this.setState({...initialState})
      // this.props.history.push("/dashboard")
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