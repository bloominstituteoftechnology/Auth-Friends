import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import Login from './Components/Login';
import PrivateRoute from './utils/PrivateRoute';
// import NavHeader from './Components/NavHeader';
// import Routes from './utils/Routes';
import FriendsList from './Components/FriendsList';

import 'semantic-ui-css/semantic.min.css';




function App() {
  return (
   <div>
     <button>
            <Link to='/login'>Login</Link>  
          </button>
      <Switch>
      <PrivateRoute path='/friends' component={FriendsList} />
      <Route path='/login' component={Login} />
      </Switch>
   </div>
  );
}

export default App;