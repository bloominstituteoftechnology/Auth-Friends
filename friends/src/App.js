import React, { useState } from 'react';
import Form from './components/Form'
import './App.css';


function App() {
  
  const [users, setUsers] = useState([]);

  return (
      <div className="App">
        <Form users={users} setUsers={setUsers}/>
        <div>
          {users.map((user, index) => (<p>Name: {user.name} Email: {user.email}</p>))}
        </div>
      </div>
    );
  }



export default App;
