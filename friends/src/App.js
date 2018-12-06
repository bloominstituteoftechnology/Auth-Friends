import React, { Component } from 'react';

import FriendsListView from './views/FriendsListView';

class App extends Component {
  
  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        <FriendsListView />
      </div>
    );
  }
}

export default App;
