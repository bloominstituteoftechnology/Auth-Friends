import logo from './logo.svg';
import { Router, Route, Switch } from 'react-router-dom'
import './App.css';
import LoginForm from './components/LoginForm'
import HomePage from './components/HomePage'

function App() {
  

  return (
    <div>
  <HomePage/>
  <LoginForm/>
  </div>
  )
};

export default App;
