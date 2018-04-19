import React, { Component } from 'react'
import { Route, withRouter } from 'react-router'
import { connect } from 'react-redux'
import { FriendsList, FriendForm } from '.'
import { cancelUpdate } from '../actions'
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
  goHome = () => {
    this.props.cancelUpdate()
    this.props.history.push('/')
  }
  render() {
    return (
      <Wrapper>
        <Left>
          <Route path='/edit/:id' render={(props) => (
            <FriendForm {...props} key={props.match.params.id} />
          )} />
          <Route exact path='/' component={FriendForm} />
          <Mat><Button onClick={this.goHome}>Home</Button></Mat>
        </Left>
        <Route path='/' component={FriendsList} />  
      </Wrapper>
    )
  }
}

export default withRouter(connect(null, { cancelUpdate })(App))
