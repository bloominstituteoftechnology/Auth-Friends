import React, {useContext, useState} from 'react';
import './App.css';
import Login from "./components/Login";
import {Route, Switch} from "react-router-dom";
import PrivateRoute from "./components/PrivateRouteTS";
import FriendList from "./components/FriendList";
import {FriendsContext} from "./contexts/FriendsContext";
import FriendsList from "./components/FriendsList";

function App() {
    const {history} = useContext(FriendsContext);



    return (
        <div className="App">
            {history.push("/friends")} {/*this redirects "/" to friends, which will redirect to login if needed*/}
            <Switch>
                <PrivateRoute exact path="/friends" component={FriendList}/>
                <Route path="/login" component={Login}/>
                <Route path="/friends_list" component={FriendsList}/>
            </Switch>
        </div>
    );
}

export default App;
