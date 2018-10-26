import React from 'react';
import { FriendsListContainer } from './containers';
import { Heading, Wrapper, BrandName } from './styles/Header';

const App = () => {
  return (
    <>
      <Heading>
        <Wrapper>
          <BrandName>Friend List</BrandName>
        </Wrapper>
      </Heading>
      <FriendsListContainer />
    </>
  );
}

export default App;