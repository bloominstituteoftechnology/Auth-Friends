import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LogIn from "./components/LogIn/LogIn";
import FriendsList from "./components/FriendsList/FriendsList";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LogIn} />
        <PrivateRoute exact path="/friends-list" component={FriendsList} />
      </Switch>
    </Router>
  );
}

export default App;
