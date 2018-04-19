import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 500px;
  margin-bottom: 20px;
  background-color: ${(props) => props.selected
    ? 'tomato'
    : 'steelblue'  
  };
  color: white;
  padding: 20px;
  transition: all 0.5s ease-in-out;
  transform: ${(props) => props.transition
    ? 'translateY(0px)'
    : 'translateY(100px)'
  };
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Controls = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`

const Button = styled.button`
  width: 100px;
  height: 50px;
`

class Friend extends Component {
  state = { transition: false }
  componentDidMount() {
    setTimeout(() => this.setState({ transition: true }))
  }

  render() {
    const { selected, name, age, email, id, deleteFriend } = this.props
    const { transition } = this.state
    return (
      <Wrapper selected={selected} transition={transition}>
        <Details>
          <h1>{name} <em>{age}</em></h1>
          <h3>{email}</h3>
        </Details>  
        <Controls>
          <Link to={`/edit/${id}`}><Button>Edit</Button></Link>
          <Button onClick={() => deleteFriend(id)}>Delete</Button>
        </Controls>  
      </Wrapper>
    )
  }
}

export default Friend