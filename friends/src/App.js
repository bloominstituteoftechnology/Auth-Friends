import React from 'react';
import './App.css';
import Login from './components/Login';
import Friends from './components/Friends';
import { Route, Link, Redirect } from 'react-router-dom';
// import { prependOnceListener } from 'cluster';

const ProtectedRoute = (props) => {
  const propsWithNoComponent = {...props, component: undefined};
  return <Route {...propsWithNoComponent} render={props => {
    if (localStorage.getItem('token')) {
      return <props.component {...props} />;
    } else {
      return <Redirect to="/login" />;
    }
  }} />;
};

function App() {
  return (
    <div className="App">
      <Route path="/login" component={Login} />
      <ProtectedRoute path="/friends" component={Friends} />
    </div>
  );
}

export default App;
