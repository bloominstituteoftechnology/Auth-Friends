import React, {useState} from 'react';
import './App.css';
import Login from "./components/Login";
import {Route, Switch, useHistory} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import FriendList from "./components/FriendList";

function App() {
    const history = useHistory();

    const [loading, setLoading] = useState(false);//todo: setup context

    return (
        <div className="App">
            <Switch>
                <PrivateRoute exact path="/friends" history={history} component={FriendList}/>
                <Route path="/login">
                    <Login loading={loading} setLoading={setLoading} history={history}/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
