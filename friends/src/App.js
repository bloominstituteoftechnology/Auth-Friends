import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import FriendList from './components/FriendList';
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <Router>
    <div className="App">
      <nav>
      <h1>Friendly</h1>
      <ul>
        <li><Link to='/'>Login</Link></li>
        <li><Link to='/friends'>FriendList</Link></li>
      </ul>
      </nav>
      <Switch>
        <PrivateRoute path='/friends' component={FriendList}/>
        <Route path='/' component={Login}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
