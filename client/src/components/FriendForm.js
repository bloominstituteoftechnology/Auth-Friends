import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createFriend, updateFriend, fetchFriend } from '../actions'
import styled from 'styled-components'

const Wrapper = styled.form`
  display: flex;
  background-color: ${(props) => props.updatingFriend
    ? 'tomato'
    : 'steelblue'
  };
  padding: 20px;
  width: 300px;
`

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  box-sizing: border-box;
  height: 40px;
  width: 200px;
  padding-left: 20px;
`

const Button = styled.button`
  height: 120px;
  padding: 20px;
`

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = props.friend
  }
  
  componentWillReceiveProps(newProps) {
    this.setState(newProps.friend)
  }
  
  buttonText = () => this.props.updatingFriend
    ? 'Update Friend'
    : 'Create Friend'
  
  handleChange = (e) => this.setState({ [e.target.name]: e.target.value })
  
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.updatingFriend
      ? this.props.updateFriend(this.state)
      : this.props.createFriend(this.state)
    this.props.history.push('/')
  }
  
  render() {
    return (
      <Wrapper onSubmit={this.handleSubmit} updatingFriend={this.props.updatingFriend}>
        <Inputs>
          <Input
            name='name'
            placeholder="Friend's name"
            value={this.state.name}
            onChange={this.handleChange} />
          <Input
            name='age'
            placeholder="Friend's age"
            value={this.state.age}
            onChange={this.handleChange} />
          <Input
            name='email'
            placeholder="Friend's email"
            value={this.state.email}
              onChange={this.handleChange} />
        </Inputs>
        <Button type='submit'>
          {this.buttonText()}
        </Button>
      </Wrapper>
    )
  }
}

class FormWrapper extends Component {
  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.fetchFriend(this.props.match.params.id)
    }  
  }
  render() {
    const blankFriend = { name: '', age: '', email: '' }
    return (
      <Form {...this.props} friend={this.props.selectedFriend || blankFriend} />
    )
  }
}

const mapStateToProps = (state) => ({ selectedFriend: state.selectedFriend, updatingFriend: state.updatingFriend })
export default connect(mapStateToProps, { fetchFriend, createFriend, updateFriend })(FormWrapper)