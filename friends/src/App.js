import React from 'react';
import { Route } from 'react-router-dom';

import { Login } from './components/Login';
import { PrivateRoute } from './components/PrivateRoute';
import { FriendsList } from './components/FriendsList';
import { Home } from './components/Home';
import { AddFriendForm } from './components/AddFriendForm';

import './App.css';


function App() {


    return (
        <div>
            <Route path='/login'>
                <Login />
            </Route>
            <PrivateRoute path='/friends'>
                <Home />
                <FriendsList />
            </PrivateRoute>
            <PrivateRoute path='/addFriend'>
                <Home />
                <AddFriendForm />
            </PrivateRoute>
        </div>  
    );
}

export default App;
