import React from 'react';
import styled from 'styled-components';

import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 880px;
  width: 100%;
  margin: 0 auto;

  h1{
    font-size: 3.2rem;
    margin-bottom: 20px;
  }
`;


const App = (props)=>{
  return (
    <AppContainer>
      <h1>Friends List</h1>
      <AddFriend/>
      <FriendsList/>
    </AppContainer>
  );
}

export default App;