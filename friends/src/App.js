import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import LoginForm from './components/LoginForm'
import PrivateRoute from './components/PrivateRoute'
import FriendsList from './components/FriendsList'
import './App.css'

const App = () => {
  return (
    <Router>
      <div className='App'>
        <header>
          <Link to="/login">Login</Link>
          <Link to="/friends">Friends</Link>
        </header>

        <Switch>
          <PrivateRoute exact path="/friends" component={FriendsList}/>
          <Route path='/login' component={LoginForm} />
          <Route component={LoginForm} />
        </Switch>
      </div>
    </Router>
  )
}

export default App


