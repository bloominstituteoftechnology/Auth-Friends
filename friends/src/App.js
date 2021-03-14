import LogIn from "./components/LogIn/LogIn";
import FriendsList from "./components/FriendsList/FriendsList";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LogIn} />
        <Route path="/friendsList" component={FriendsList} />
      </Switch>
    </Router>
  );
}

export default App;
