
import './App.css';
import {  Route, Link, Switch, useHistory} from 'react-router-dom';

import Login from './components/Login'
import FriendsList from './components/FriendsList'
import PrivateRoute from './components/PrivateRoute'

function App() {
  const history = useHistory()

const logout = () => {
  localStorage.removeItem('token')
  history.pushState('/login')
}

  return (
    <div className="App">
    <ul>
      <li>
        <Link to='/login'>Log In</Link>
      </li>
      <li>
        <Link onClick={logout}>Log Out</Link>
      </li>
      <li>
        <Link to="/protected">Friends List</Link>
      </li>
    </ul>
     <div>
      <Switch>
        <PrivateRoute exact path='/protected' component={FriendsList}/>
        <Route path='/login' component={Login}/>
        
      </Switch>
     </div>
    </div>
  );
}

export default App;
