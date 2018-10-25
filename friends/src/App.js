import React, { Component } from 'react';
import ListContainer from './Components/ListContainer'
import ActionsContainer from './Components/ActionsContainer'
import styled from 'styled-components';

const WrapperDiv = styled.div`
  display:flex;
`

class App extends Component {
  render() {
    return (
      <WrapperDiv>
        <ActionsContainer></ActionsContainer>        
        <ListContainer></ListContainer>
      </WrapperDiv>
    );
  }
}

export default App;
