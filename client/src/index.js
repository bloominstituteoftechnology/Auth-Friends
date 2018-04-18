import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import registerServiceWorker from './registerServiceWorker'

import { App } from './components'
import rootReducer from './reducers'

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>, document.getElementById('root')
  )
  registerServiceWorker()
