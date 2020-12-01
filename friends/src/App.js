import "./App.css";
import { Switch, Route } from "react-router-dom";

import Login from "./components/Login";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
