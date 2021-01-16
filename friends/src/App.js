import './App.css';
import LoginPage from "./components/LoginPage";
import FriendsList from "./components/FriendsList";
import HomeScreen from "./components/HomeScreen";
import AddFriend from "./components/AddFriend";
import { BrowserRouter, Link, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route path="/signin" component={LoginPage} />
      <Route path="/friends-list" component={FriendsList} />
      <Route path="/add-friend" component={AddFriend} />
      <Route path="/" exact component={HomeScreen} />
    </div>
    </BrowserRouter>
  );
}

export default App;
