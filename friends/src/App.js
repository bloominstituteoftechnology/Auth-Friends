import React, { Fragment } from 'react';

import { FriendsForm } from './components';
import { FriendsListView } from './views';

const App = () => (
  <Fragment>
    <FriendsForm />
    <FriendsListView />
  </Fragment>
);

export default App;
