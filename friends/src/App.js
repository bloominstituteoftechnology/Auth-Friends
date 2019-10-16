import React from 'react';
import './App.css';
import Login from "./components/Login";

function App() {

  const PrivateRoute = ({ component: Component, ...rest }) => (
    
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("token") ? (
          <Login {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );

  return (
    <div className="App">
      <header className="App-header">
        <Route path="/public" component={Public} />
        <Route path="/login" component={Login} />
        <PrivateRoute path='/private' component={Protected} />
      </header>
    </div>
  );
}

export default App;
