import React from 'react'
import { Route, Link, Switch, useHistory } from "react-router-dom";
import Login from './Login'
import Friends from './Friends'

function App() {
  const history = useHistory();

  return (
    <div className='app'>
      <ul>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/logout'>Logout</Link></li>
        <li><Link to='/friends'>Friends</Link></li>
      </ul>
      <Switch>
        <Route exact path='/friends' component={Friends} />
        <Route  path='/login' component={Login} />
        <Route component={Login} />
      </Switch>
    </div>
  )
}

export default App
