import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { Container } from '@material-ui/core';
import './App.css'

import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Friends from './components/Friends'
import NavBar from './components/NavBar';

const useStyles = makeStyles({
  Container: {
    background: 'white',
    justifyContent: 'right',
    alignItems: 'center',
    borderRadius: 2,
    padding: 20,
  },
})

function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Container className={classes.Container}>
          <Switch>
            <PrivateRoute path="/protected" component={Friends} />
            <Route path="/login" component={Login} />
            <Route component={Login} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
