import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Friends from './components/Friends'
import addFriend from './components/addFriend'
const Div = styled.div`
display:flex;
justify-content:space-around;

`;
function App() {
  return (
  <Router>
    <div className='App'>
      <Div>
      <Link to='/login'>Login</Link>
      <Link to='/protected'>Friends List</Link>
      <Link to='/addFriend'>Add a Friend</Link>
      </Div>
      <Switch>
        <PrivateRoute exact path='/protected' component={Friends}/>
        <Route path='/login' component={Login}/>
        <PrivateRoute path='/addFriend' component={addFriend}/>
{/* <PrivateRoute path="/dashboard" component={Dashboard} /> */}
        <Route component={Login} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
