import React from 'react' 
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './App.css'

import styled from 'styled-components'
import PrivateRoute from './components/PrivateRoute'
import FriendsList from './components/FriendsList'
import Login from './components/Login'
import Post from './components/Post'


const AppStyles = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
margin: 0 auto;
padding:  5rem;
`;


function App() {
    return (
        <AppStyles>
          <Router>
              <div className="App">
                  <div className="Link">
                    <Link to="/protected">PROTECTED</Link><br/>
                    <Link to="/add-friend">ADD FRIEND</Link>
                  </div>
                  <Switch>
                      <PrivateRoute path='/protected' component={FriendsList} />
                      <Route path='/login' component={Login} />
                      <Route path="/add-friend" component={Post} />
                      <Route component={Login} />
                      <Route component={Post} />
                  </Switch>
              </div>
          </Router>
        </AppStyles>
    )
}


export default App;