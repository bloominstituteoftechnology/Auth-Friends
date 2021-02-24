import { Redirect, Route, Switch } from "react-router-dom";

import { FriendsList } from "./FriendsList";
import { Home } from "./Home";
import { Login } from "./Login";
import { Logout } from "./Logout";
import { Navbar } from "./components/Navbar";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  const token = localStorage.getItem("token");
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <PrivateRoute path="/friendslist" component={FriendsList} />
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
