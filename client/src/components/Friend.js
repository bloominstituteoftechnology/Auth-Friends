import React from 'react'
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

const Friend = (props) => (
  <Wrapper selected={props.selected}>
    <Details>
      <h1>{props.name} <em>{props.age}</em></h1>
      <h3>{props.email}</h3>
    </Details>  
    <Controls>
      <Link to={`/edit/${props.id}`}><Button>Edit</Button></Link>
      <Button onClick={() => props.deleteFriend(props.id)}>Delete</Button>
    </Controls>  
  </Wrapper>
)

export default Friend