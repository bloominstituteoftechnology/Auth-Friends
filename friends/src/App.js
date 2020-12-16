import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Login from './components/Login'
import FriendsList from './components/FriendsList'
import AddFriend from './components/AddFriend'
import PrivateRoute from './utils/PrivateRoute'


function App() {

  const logout = () => {
    return(
      localStorage.removeItem('token')
      //window.location.href = '/login'
    )}


  return (
    <Router>
    <div className="App">
    <ul>
    <li><Link to='/protected'>Friend List</Link></li>
    <li><Link onClick={logout} to='/login'>Logout</Link></li>
    </ul>
    <Switch>
    <Route exact path='/login' component={Login}/>
    <PrivateRoute path='/protected' component={FriendsList}/>
    <PrivateRoute path='/protected' component={AddFriend}/>
    <Route component={Login}/>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
