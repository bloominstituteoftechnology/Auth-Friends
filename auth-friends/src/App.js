import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { axiosWithAuth } from './utils/axiosWithAuth';
import Login from './components/Login';


function App() {
  // const logout = () => {
  //   axiosWithAuth()
  //     .post('/logout')
  //     .then(res => {
  //       localStorage.removeItem('token');
  //       window.location.href = '/login';
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })
  // }

  const login = (e) => {
    e.preventDefault();

  }

  return (
    <Router>
        <div className="App">
          <div>
            <Link to='/login'>Login</Link>
          </div>
        </div>
      <Switch>
      <Route path='/login' component={Login} />
      </Switch>
    </Router>
  );
}

export default App;