import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/LoginForm'
import FriendsList from './components/friendsList'
import PrivateRoute from './components/PrivateRoute'

function App() {
  const logout =() =>{
    localStorage.removeItem('token')
    window.location.href = '/login'
  }




  return (
    <Router>
    <div className="App">
      <Link to='/login'>Login</Link>
      <Link onClick ={logout}>Log Out</Link>
      <Switch>
        <PrivateRoute exact path ='/protected' component={FriendsList} />
        <Route path='login' component={Login}/>
        <Route component={Login} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
