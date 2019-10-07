import React, { useState } from 'react';
import './App.css';
import UserLoginForm from './components/UserLogin/UserLoginForm';
import UserContext from './components/UserContext/UserContext';


function App() {
  const [authToken, setAuthToken] = useState({});

  return (
    <div className="App">
      <UserContext.Provider value={ {authToken, setAuthToken} }>
        <UserLoginForm setToken={setAuthToken}/>
      </UserContext.Provider>
    </div>
  );
}

export default App;
