import React,{useState} from 'react';
import {Route,Link, Switch} from 'react-router-dom';
import Login from './component/Login';
import FriendsList from './component/FriendsList';
import FriendForm from './component/FriendForm';
import FriendProfile from './component/FriendProfile';
import PrivateRoute from './component/PrivateRoute';
 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [addFriend,setAddFriend]=useState(false);
  return (
    <div className="App">
       <header>
       <h1>Friends List!</h1>
       <nav>
         <Link className="navLink" to="/login">Login</Link>
         <Link className="navLink" to="/friends">Friends List</Link>
         <Link className="navLink" to="/add">Add Friend</Link>
         <Link to="/edit/id"></Link>
         <Link to="/friends/id"></Link>
       </nav>
       </header>
       <Switch>
         {/* FriendList is a Protected route */}
       <PrivateRoute exact path="/friends">
          <FriendsList addFriend={addFriend} />
       </PrivateRoute>

         <Route path="/login">
           <Login/>
         </Route>

          {/* Form to add friend */}
          <PrivateRoute exact path="/add">
            <FriendForm setAddFriend={setAddFriend}/>
          </PrivateRoute>

          {/* Form to Edit friend (gather info from param id)  */}
          <PrivateRoute exact path="/edit/:id">
            <FriendForm />
          </PrivateRoute>

         <Route exact path="/friends/:id">
           <FriendProfile />
         </Route>
        
       </Switch>
    </div>
  );
}

export default App;
