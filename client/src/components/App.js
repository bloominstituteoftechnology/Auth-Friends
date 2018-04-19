import React, { Component } from 'react'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'
import { FriendsList, FriendForm } from '.'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Mat = styled.div`
  padding: 20px;
  background-color: steelblue;
  margin-top: 20px;
`

const Button = styled.button`
  width: 300px;
  height: 50px;
`

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Left>
          <Route path='/edit/:id' render={(props) => (
            <FriendForm {...props} key={props.match.params.id} />
          )} />
          <Route exact path='/' component={FriendForm} />
          <Mat><Link to='/'><Button>Home</Button></Link></Mat>
        </Left>  
        <Route path='/' component={FriendsList} />  
      </Wrapper>
    )
  }
}

export default App
