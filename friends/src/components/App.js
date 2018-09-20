import React from 'react';
import HomePage from '../components/HomePage';
import FriendPage from '../components/FriendPage';
import { Route } from 'react-router-dom';
import FriendNav from './FriendNav';

const App = () => {
  return (
    <div className="App">
      <FriendNav />
      <Route path="/friend/:id" component={FriendPage} />
      <Route exact path="/" component={HomePage} />
    </div>
  );
};

export default App;
