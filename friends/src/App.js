import React from 'react';
import AddFriend from './components/AddFriend';
import FriendsList from './components/FriendsList';

import './App';
 
const App = () => {

    return (
       <React.Fragment>
        <AddFriend />
        <FriendsList />

        {/* UpdateFriend? */}
      </React.Fragment>
    );

}; 

export default App; 
