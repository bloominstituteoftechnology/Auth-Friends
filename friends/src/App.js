import React, { Component } from 'react';
import './Style.css';
import FriendsView from './views/friendsView';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <FriendsView {...this.props} />
      </div>
    );
  }
}

export default App;
