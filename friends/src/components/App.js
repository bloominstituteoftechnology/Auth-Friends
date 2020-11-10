import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Login from './Login';
import FriendsDash from './FriendsDash';
import '../App.css';



function App() {
  return (
    <Router>
      <div className="App">
        <ul className="nav">
          <li>
            <Link to="/login"> Login </Link>
          </li>
          <li>
            <Link to="/protected">Friends Page</Link>
          </li>
        </ul>
        <h1>Friends App</h1>
        <Switch>
          <Route path="/login" component={Login} />
          <Route exact path = "/protected" component={FriendsDash} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
