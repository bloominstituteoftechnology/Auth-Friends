import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Route} from 'react-router-dom'
import Login from './Components/Login'
import FriendsList from './Components/FriendsList'
import PrivateRoute from './Components/PrivateRoute'

function App() {
  return (
    <div>
     <Route path='/Login'>
        <Login/>
      </Route>
      <PrivateRoute path='/FriendsList'>
        <FriendsList/>
      </PrivateRoute>
    </div>
  )
    
}

export default App;
