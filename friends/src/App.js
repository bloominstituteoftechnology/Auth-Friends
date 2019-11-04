import React, { useState, useEffect } from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
// import axios from 'axios';
import './App.css';
import FriendsList from './components/FriendsList';
import Login from './components/Login';

function App() {
  // const [friends, newFriend] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get('http://localhost:5000/api/friends')
  //     .then(res => {
  //       // newFriend(res.data)
  //       console.log(res)
  //     })
  //     .catch(error => console.log('error, no data returned'));
  // }, []);

  return (
    <div className="App">
      <nav className="nav-header">
       <Link 
        to='/Login'
        className='link'>Login</Link>

        <Link 
          to='/'
          className='link'>Friends</Link>
      </nav>

      <Route 
        path='/'
        component={Login}
      />
      
      <Route 
        exact path='/FriendsList'
        component={FriendsList}
      />
     
    </div>
  );
}

export default App;
