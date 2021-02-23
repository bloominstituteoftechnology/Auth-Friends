import { Route, Switch } from "react-router-dom";

import { Home } from "./Home";
import { Login } from "./Login";
import { Navbar } from "./components/Navbar";
import { Protected } from "./Protected";
import { axiosWithAuth } from "./utils/axiosWithAuth";
import { useEffect } from "react";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/protected">
          <Protected />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
