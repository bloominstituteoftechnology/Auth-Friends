// import NavBar from './Components/NavBar';
import Login from './Components/Login';
import Friends from './Components/Friends'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import PrivateRoute from './Components/PrivateRoute'
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <PrivateRoute exact path='/protected' component={Friends}/>
        <Route path='/login' component={Login}/>
        <Route component={Login}/>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
