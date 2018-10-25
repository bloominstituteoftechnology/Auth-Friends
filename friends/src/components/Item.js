import React, { Component, Fragment } from 'react'
import { Line } from '../styles/Card'
import { Input } from '../styles/Item'

class Item extends Component {
  state = {
    edit: false,
    value: this.props.children
  }

  // create ref to set focus on input when it loads
  textInput = React.createRef()

  // add listener to check for clicks outside element
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  // set focus on input if editing
  componentDidUpdate() {
    if (this.state.edit) {
      this.focusTextInput()
    }
  }

  // remove listenr
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  // set wrapper ref for listener
  setWrapperRef = node => {
    this.wrapperRef = node
  }

  // update state if click registers outside element
  handleClickOutside = event => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({
        edit: false,
        value: this.props.children
      })
    }
  }

  // set focus on input with ref
  focusTextInput() {
    this.textInput.current.focus()
  }

  // load input field on click
  handleClick = event => {
    this.setState({ edit: true })
  }

  // update state in response to input field changes
  handleChange = event => {
    this.setState({ value: event.target.value })
  }

  // update field in db on enter (submit)
  handleSubmit = event => {
    event.preventDefault()
    const { id, field } = this.props
    const { value } = this.state

    this.props.updateFriend({ id, field, value })

    // this should call AFTER the api returns
    // close input and remove focus
    this.resetElement()
  }

  resetElement = () => {
    this.setState({
      edit: false,
      value: this.props.children
    })
  }

  render() {
    const { children } = this.props
    const { edit, value } = this.state
    const { handleClick, handleChange, handleSubmit } = this

    return (
      <Fragment>
        {edit === false ? (
          <Line onClick={handleClick}>{children}</Line>
        ) : (
          <form onSubmit={handleSubmit} ref={this.setWrapperRef}>
            <Input value={value} onChange={handleChange} ref={this.textInput} />
          </form>
        )}
      </Fragment>
    )
  }
}

export default Item
