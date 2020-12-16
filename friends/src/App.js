import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Login from './components/Login';
import Friends from './components/Friends';
import PrivateRoute from './utils/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to='/login'>Log In</Link>
          </li>
        </ul>
        <Switch>
            <Route path='/login' component={Login} />
             <PrivateRoute exact path='/friends' component={Friends} />
        </Switch>
             
      </div>  
      </Router>
    
  );
}

export default App;
