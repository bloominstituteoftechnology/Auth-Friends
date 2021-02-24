import React from 'react'
import { Route, Link, Switch, useHistory } from "react-router-dom";
import Login from './components/Login'
import Friends from './components/Friends'
import PrivRouter from './components/PrivRouter'
import {axiosAuth} from './utils/axiosAuth'

function App() {
  const history = useHistory()

  const logout = () => {
    axiosAuth()
      .post('/api/logout')
      .then(() => {
        localStorage.removeItem('token');
        history.push('/login');
      })
      .catch(err=>console.log(err))
  };

  return (
    <div className='app'>
      <ul>
        <li><Link to='/login'>Login</Link></li>
        <li><Link onClick={logout} to='/logout'>Logout</Link></li>
        <li><Link to='/friends'>Friends</Link></li>
      </ul>
      <Switch>
        <PrivRouter exact path='/friends' component={Friends} />
        <Route  path='/login' component={Login} />
        <Route component={Login} />
      </Switch>
    </div>
  )
}

export default App
