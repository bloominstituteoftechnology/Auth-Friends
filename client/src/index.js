import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { createStore, applyMiddleware, Provider } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import App from './components'
import rootReducer from './reducers'

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
)
registerServiceWorker()
