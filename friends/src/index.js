//react
import React from 'react'
import ReactDOM from 'react-dom'

//redux
import {applyMiddleware, createStore} from "redux"
import {Provider} from "react-redux"
//middleware
import thunk from 'redux-thunk'
//local
import rootReducer from './reducers'
import Routes from './routes'
import './reset.css'

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

const root = document.getElementById('root')
ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    root
)