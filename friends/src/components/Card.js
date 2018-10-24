import React, { Component } from 'react'
import axios from 'axios'
import { Container, Close } from '../styles/Card'
import Item from './Item'
import close from '../icons/close.png'

class Card extends Component {
  handleClose = id => {
    axios
      .delete(`/api/friends/${id}`)
      .then(res => this.props.updateFriends(res.data))
      .catch(err => console.log(err))
  }

  render() {
    const { id, name, age, email } = this.props
    const { handleClose } = this

    return (
      <Container>
        <Item id={id} field="name" {...this.props}>
          {name}
        </Item>
        <Item id={id} field="age" {...this.props}>
          {age}
        </Item>
        <Item id={id} field="email" {...this.props}>
          {email}
        </Item>
        <Close onClick={() => handleClose(id)}>
          <img src={close} alt="close" />
        </Close>
      </Container>
    )
  }
}

export default Card
