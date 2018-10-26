import React from 'react';
import ListContainer from './ListContainer'
import ActionsContainer from './ActionsContainer'
import styled from 'styled-components';

const WrapperDiv = styled.div`
  display:flex;
`

const Home = () =>{
    return (
        <WrapperDiv>
          <ActionsContainer></ActionsContainer>        
          <ListContainer></ListContainer>
        </WrapperDiv>
      );
}

export default Home
