import React from 'react';

import AddFriend from './components/AddFriend';
import FriendsList from './components/FriendsList';

import './App.css';

const App = () => {

    return (
      <div className='Friend'>
        <h2>Lambda Friends</h2>
        <AddFriend />
        <FriendsList />
        {/* UpdateFriend? */}
      </div>
    );

}; // end of App class

export default App;