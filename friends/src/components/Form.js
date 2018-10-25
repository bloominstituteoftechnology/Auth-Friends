import React, { Component } from 'react'
import {
  FormContainer,
  FormTitle,
  FormText,
  FormInput,
  FormButton
} from '../styles/Form'

class Form extends Component {
  state = {
    name: '',
    age: '',
    email: ''
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()

    const { name, age, email } = this.state

    if (
      name.trim().length &&
      Number.isInteger(parseInt(age)) &&
      email.trim().length
    ) {
      this.props.saveFriend({ name, age, email })
    } else {
      console.log('try harder')
    }
  }

  render() {
    const { name, age, email } = this.state
    const { handleChange, handleSubmit } = this

    return (
      <FormContainer onSubmit={handleSubmit}>
        <FormTitle>add a new friend!</FormTitle>

        {/*all seemingly unnecessary stuff to prevent chrome from autocompleting form*/}

        <input type="hidden" value="something" />
        <FormText htmlFor="name">name</FormText>
        <FormInput
          type="text"
          id="name"
          value={name}
          autoComplete="nope"
          name="name"
          onChange={handleChange}
        />

        <FormText htmlFor="name">age</FormText>
        <FormInput
          type="text"
          id="age"
          value={age}
          autoComplete="nope"
          name="age"
          onChange={handleChange}
        />

        <FormText htmlFor="name">email</FormText>
        <FormInput
          type="text"
          id="email"
          value={email}
          autoComplete="nope"
          name="email"
          onChange={handleChange}
        />
        <FormButton type="submit">add</FormButton>
      </FormContainer>
    )
  }
}

export default Form
