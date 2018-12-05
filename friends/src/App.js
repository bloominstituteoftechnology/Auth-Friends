import React, {Component} from 'react';
import FriendsList from './components/FriendsList';
import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

// styled-componenets reset
const GlobalStyle = createGlobalStyle`
  ${reset}
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <FriendsList />
      </div>
    );
  }
}

export default App;
