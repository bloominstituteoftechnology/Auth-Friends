import React , { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";
import AddFriends from "./components/AddFriends";
import PrivateRoute from "./components/PrivateRoute";
import FriendList from "./components/FriendList";
import axiosWithAuth from "./utils/axiosWithAuth"

function App() {
  const [friends,setFriends] = useState([]) 

  useEffect( () => {
    axiosWithAuth()
    .get('/api/friends')
    .then(res => {
        console.log(res.data)
        setFriends(res.data)
    })
}, [])

  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <Switch>
            
            <Route path="/login" component={Login} />
            <Route path="/addfriend" component={AddFriends} />
            <PrivateRoute path="/friends" component={()=> <FriendList friends={friends}/>} />
          </Switch>
          <ul>
            <li className="li">
              <Link to="/login">Login</Link>
            </li>
            <li className="li">
              <Link to="/friendlist">FriendList</Link>
            </li>
          </ul>
          {/* <AddFriends /> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
