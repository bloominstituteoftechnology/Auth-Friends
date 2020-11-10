import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom'

//Components
import {LoginPage} from './components/LoginPage'
import {FriendsList} from './components/FriendsList'


function App() {
  return (
    <Switch>
      <Route exact path="/">
        <LoginPage/>
      </Route>
      <Route path ="/friends">
        <FriendsList/>
      </Route>
    </Switch>
  );
}

export default App;
