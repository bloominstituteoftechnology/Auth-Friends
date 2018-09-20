import React, { Component } from 'react';
import './App.css';
import Styled from 'styled-components';

import FriendListView from './views/FriendListView';
import FriendFormAddView from './views/FriendFormAddView';

const Wrapper = Styled.div`
  max-width: 880px;
  width: 100%;
  margin: 0 auto;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <FriendFormAddView />
        <FriendListView />
      </Wrapper>
    );
  }
}

export default App;
