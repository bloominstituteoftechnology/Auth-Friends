import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Header from "./components/Header"
import Login from "./components/Login"
import axios from 'axios';
import PrivateRoute from "./components/PrivateRoute"
import FriendList from "./components/FriendList"
console.log(localStorage.getItem('token'))
function App() {

  return (
    <div className="App">
      <Header/>
      <Route path = "/login" component = {Login}/>
      <PrivateRoute path= "/friends"/>
    </div>
  );
}

export default App;
