import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Login from './Login';
import '../App.css';



function App() {
  return (
    <Router>
      <div className="App">
        <ul className="nav">
          <li>
            <Link to="/login"> Login </Link>
          </li>
        </ul>
        <h1>Friends App</h1>
        <Switch>
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
