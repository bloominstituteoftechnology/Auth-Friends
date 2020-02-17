import React, {useReducer} from 'react';
import { Route } from "react-router-dom";
import './App.css';
import { StateContext, DispatchContext } from './contexts';
import { initialState } from './state';
import { reducer } from './reducer';
import Login from './components/Login';
import Nav from './components/Nav';

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <DispatchContext.Provider value={{ dispatch }}>
            <StateContext.Provider value={{ state }}>
                <div className='App'>
                    <Nav />
                    <Route
                        exact
                        path='/login'
                        component={Login}
                    />
                </div>
            </StateContext.Provider>
        </DispatchContext.Provider>
    );
}

export default App;
