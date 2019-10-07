import React, { useState } from 'react';
import './App.css';
import UserLoginForm from './components/UserLogin/UserLoginForm';
import UserContext from './components/UserContext/UserContext';
import AddFriendForm from './components/AddFriendForm/AddFriendForm'

function App() {
  const [authToken, setAuthToken] = useState({});

  return (
    <div className="App">
      <UserContext.Provider value={ {authToken, setAuthToken} }>
        <UserLoginForm setToken={setAuthToken}/>
        <AddFriendForm token={authToken}/>
      </UserContext.Provider>
    </div>
  );
}

export default App;
