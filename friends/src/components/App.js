import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
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
        
      </div>
    </Router>
  );
}

export default App;
