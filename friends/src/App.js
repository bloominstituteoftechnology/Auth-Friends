import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';
import LogIn from './components/LogIn';
import FriendsList from './components/FriendsList';

function App() {
  const BG2 = require('./images/FriendsPhotoStack.jpg');
  const BG = require('./images/FriendsLogo.png');
  return (
    <div className="App">
      <Link className='link' to='/'>Home</Link>
      <Link className='link' to='/login'>Log In</Link>
      <img className='bg2' src={BG2} alt='Friends Show main characters' />
      <img src={BG} alt='Friends Show Logo' />
      <img className='bg2' src={BG2} alt='Friends Show main characters' />
      <Link className='link' to='/friendsList'>Friends List</Link>
      <Link className='link' to='/'>Home</Link>
      <div>
        <p style={{ color: "white" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
      </div>
      <Switch>
        <Route path='/login' component={LogIn} />
        <Route path='/friendslist' component={FriendsList} />
      </Switch>
    </div>
  );
}

export default App;
