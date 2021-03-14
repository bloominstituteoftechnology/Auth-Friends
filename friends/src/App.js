import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import  PrivateRoute  from './components/PrivateRoute';
import './App.css';

function App() {
  return (
  <Router>
    <div className="App">
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
      <Switch>
        <PrivateRoute exact path='/friends' component={FriendList} />
        <Route path='/login' component={Login} />
        <Route path='/' component={Home} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
