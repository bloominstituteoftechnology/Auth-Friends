import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { axiosWithAuth } from './utils/axiosWithAuth';
import Login from './components/Login.js';
import Friends from './components/FriendList'
import './App.css';
import PrivateRoute from './components/PrivateRoute'
function App() {

  const logout = () => {
    axiosWithAuth()
      .post('/logout')
      .then(res=>{
        localStorage.removeItem('token');
        window.location.href =  '/login';
      })
      .catch(err=>{
        console.log(err);
      })
  };

  return (
    <div className="App">
     <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link onClick={logout}>Logout</Link>
          </li>
          {/* <li>
            <Link to="/protected">Protected Page</Link>
          </li> */}
        </ul>

        <Switch>
          <PrivateRoute exact path="/api/friends" component={Friends} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
