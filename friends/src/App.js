import React from 'react';
import { Route } from 'react-router-dom';

import {Login} from './components/Login'

import './App.css';

function App() {


    return (
        <div>
            <Route path='/login'>
                <Login />
            </Route>
        </div>  
    );
}

export default App;
