import React from 'react';
import { Route } from 'react-router-dom';

import { Login } from './components/Login';
import { PrivateRoute } from './components/PrivateRoute';
import { FriendsList } from './components/FriendsList';
import { Home } from './components/Home';

import './App.css';

function App() {


    return (
        <div>
            <Route path='/login'>
                <Login />
            </Route>
            <PrivateRoute path='/home'>
                <Home />
                <FriendsList />
            </PrivateRoute>
        </div>  
    );
}

export default App;
