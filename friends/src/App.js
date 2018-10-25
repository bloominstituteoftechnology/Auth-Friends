import React from 'react';
import FriendList from './components/FriendList'
import FriendForm from './components/FriendForm'
import styled from 'styled-components'

const AppContainer = styled.div `
  width:85%;
  margin: 0 auto;
  h1{
    text-align:center;
    text-shadow: 2px 2px 10px gold, -2px -2px 10px gold;
  }
`


const App = () => {

    return (
      <AppContainer>
        <h1>Thank you for being a friend</h1>
        <FriendForm/>
          <FriendList/>
      </AppContainer>
    );
  }


export default App;
