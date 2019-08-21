import React from 'react';
import { Link, Route } from 'react-router-dom';
import Public from './components/Public'
import Login from './components/Login'
import Friends from './components/Friends'
import PrivateRoute from './components/PrivateRoute'
import AddFriend from './components/AddFriend'
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
            <Link to="/public">Public Page</Link> <br/>
            <Link to="/protected">Protected Page</Link> <br/>
            <Link to="/login"> Log in</Link> 

        <Route path="/public" component={Public} />
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/protected" component={Friends} />
        <PrivateRoute exact path="/protected-add" component={AddFriend}/>
      </div>
    </div>
  );
}

export default App;
