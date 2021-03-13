
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';

import PrivateRoute from "./components/PrivateRoute.js";
import Login from "./components/Login";
import Header from "./components/Header";
import FriendList from "./components/FriendList";
import AddFriend from "./components/AddFriend";


function App() {
  return (
    <div className="App">
      <Header />
    <div className="app-background-container">

      <Switch>
        <PrivateRoute exact path="/protected" component={FriendList} />
        <Route path="/login" component={Login} />
        <Route path="/addfriend" component={AddFriend} />
        <Route exact path="/"/>
      </Switch>

    </div>
    </div>
  );
}

export default App;
