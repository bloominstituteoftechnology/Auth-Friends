import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Login from "./components/Login";
import Friends from "./components/Friends";
import CreateFriend from "./components/CreateFriend";
import PrivateRoute from "./components/PrivateRoute";
import UpdateFriend from "./components/UpdateFriend";

function App() {
  return (
   <Router>
     <div>

       <ul>
         <li>
           <Link to= "/login">Log In</Link>
         </li>
         <li>
           <Link to="/friends">Friends</Link>
         </li>
         <li>
           <Link to="/newfriend">Create New Friend</Link>
         </li>
       </ul>

        <Route path="/login" component={Login} />
        <PrivateRoute exact path='/' component={Friends} />
        <PrivateRoute path='/newfriend' component={CreateFriend} />
        <PrivateRoute path='updatefriend' component={UpdateFriend} />

     </div>
   </Router>
  );
}

export default App;
