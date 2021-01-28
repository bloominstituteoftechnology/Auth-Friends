import Login from './components/Login'
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
    <PrivateRoute path='/friends' component={FriendsPage} />
    <Route path='/login' component={Login} />
    </Switch>
    </div>
    </Router>
  );
}

export default App;
