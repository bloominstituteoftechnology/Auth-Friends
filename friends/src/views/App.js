import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import { Friends, CreateFriendForm, UpdateFriendForm } from '../components';

const App = props => {
    return (
      <div>
        <NavLink to='/create' style={{ textDecoration: 'none' }}>Create New Friend</NavLink>
        
        <Route path='/create' component={CreateFriendForm} />
        <Route path='/update/:id' component={UpdateFriendForm} />

        <h1>Friends!</h1>
        <Friends />
      </div>
    );
  }

  export default App;