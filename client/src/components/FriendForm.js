import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createFriend, updateFriend, fetchFriend } from '../actions'

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
      <form onSubmit={this.handleSubmit}>
        <input
          name='name'
          placeholder="Friend's name"
          value={this.state.name}
          onChange={this.handleChange} />
        <input
          name='age'
          placeholder="Friend's age"
          value={this.state.age}
          onChange={this.handleChange} />
        <input
          name='email'
          placeholder="Friend's email"
          value={this.state.email}
          onChange={this.handleChange} />
        <button type='submit'>
          {this.buttonText()}
        </button>
      </form>
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