import Login from './components/Login'
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute'
import FriendsPage from './components/FriendsPage'

function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
    <PrivateRoute exact path='/friends' component={FriendsPage} />
    <Route path='/login' component={Login} />
    </Switch>
    </div>
    </Router>
  );
}

export default App;
