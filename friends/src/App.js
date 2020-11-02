import './App.css';
import {Link, Switch, Route} from 'react-router-dom';
import {PrivateRoute} from './components/PrivateRoute';
import FriendsList from './components/FriendsList';
import Login from './components/Login'
import Friend  from './components/Friend';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
          <Link to='/login'>Login</Link>
          <br></br>
          <Link to='/protected/friends'>Friends</Link>
          <Switch>
            <PrivateRoute exact path='/protected/friends' component={FriendsList}/>
            <PrivateRoute exact path='/protected/friends/:id' component={Friend}/>
            <Route path='/login' component={Login}/>
          </Switch>
      </div>
        
      </header>
    </div>
  );
}

export default App;
