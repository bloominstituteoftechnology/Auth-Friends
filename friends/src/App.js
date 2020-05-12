import React from 'react'
import LoginForm from './components/LoginForm'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Sign In</Link>
          </li>
        </ul>
        <Route path="/login">
          <LoginForm />
        </Route>
      </div>
    </Router>
  )
}

export default App
