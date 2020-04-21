import React from 'react';
import Login from './components/Login';
import { Route } from 'react-router-dom';
import Landing from './components/Landing';

function App() {
  return (
    <div className="App">
        
        <Route exact path='/' component={Landing}/>
        <Route  path='/login' component={Login} />
       
        
      </div>
    
  );
}

export default App;
