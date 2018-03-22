import React from 'react';

import AddFriend from './components/AddFriend';
import FriendsList from './components/FriendsList';

import './App';

const App = () => {

    return (
      <React.Fragment>
        <FriendsList />
        <AddFriend />
        {/* UpdateFriend? */}
      </React.Fragment>
    );

}; // end of App class

export default App;