import React, { useState } from 'react'
import { Button, TextField, CircularProgress } from '@material-ui/core';
import axiosWithAuth from '../utils/axiosWithAuth'

const initialState = {
  name: "",
  age: "",
  email: "",
  isLoading: false
}

const AddFriend = props => {
  const [state, setState] = useState({})

  const handleChanges = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const submit = e => {
    e.preventDefault()

    axiosWithAuth().post("/api/friends", state)
      .then(res => {
        setState({...initialState})
        props.history.push("/friends-list")
      })
      .catch(err => {
        setState({...initialState})
        console.error(err)
      })
  }

  return (
    <form>
      <TextField onChange={handleChanges} label="Name" name="name" />
      <TextField onChange={handleChanges} label="Age" name="age" />
      <TextField onChange={handleChanges} label="Email" name="email" />
      <Button variant="contained" onClick={submit}>{state.isLoading ? <CircularProgress /> : <>Submit</>}</Button>
    </form>
  )
}

export default AddFriend