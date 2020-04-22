import React from 'react';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import Landing from './components/Landing';
import Friends from './components/Friends';
import PrivateRoute from './components/ProtectedRoute';
import NewFriend from './components/NewFriend';


function App() {


  return (
    <div className="App">
        
        <Route exact path='/' component={Landing} />
        <Route path='/login' component={Login} />
        <PrivateRoute exact path='/friends' component={Friends} />
        <Route path='/friends/add' component={NewFriend} />
        
    </div>
    
  );
}

export default App;
