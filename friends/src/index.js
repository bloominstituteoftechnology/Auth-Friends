import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import AppWrap from './App.js'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'
import { rootReducer } from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk, logger))
)

ReactDOM.render(
    <Provider store={store}>
        <AppWrap />
    </Provider>,
    document.getElementById('root')
)
