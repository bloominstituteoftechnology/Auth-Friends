import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from '../src/components/App'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import Thunk from 'redux-thunk'
import rootReducer from './reducers/index'
import { BrowserRouter as Router } from 'react-router-dom'

const store = createStore(rootReducer, applyMiddleware(logger, Thunk))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
