import { Route, Switch, Link, Redirect } from "react-router-dom";
import './App.css';

import Login from './components/Login'
import List from './components/List'



function App() {
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("token") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
  const logout = () =>{
    localStorage.removeItem('token');
    window.location.reload(false);
  }
  return (
    <div className="App">
      <h1>Auth Friends</h1>
      <nav>
        <Link to='/list'>List</Link>
        <Link to='/login'>Login</Link>
        <button className='navButt' onClick= {logout}>Log Out</button>
      </nav>
      <Switch>
          <Route exact path="/login" component={Login} />
          <PrivateRoute path="/list" component={List} />
      </Switch>
    </div>
  );
}

export default App;
