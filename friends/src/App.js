import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
				<Switch>
					<PrivateRoute exact path="/protected" component={FriendsList}/>
					<Route component={Login}/>	
				</Switch>
			</Router>
    </div>
  );
}

export default App;
