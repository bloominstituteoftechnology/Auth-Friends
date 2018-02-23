import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import thunk from "redux-thunk";
import logger from "redux-logger";
<<<<<<< HEAD
import { Provider } from "redux-logger";
import rootReducer from "./reducers";
import { createStore, applyMiddleware } from "redux";

ReactDOM.render(<App />, document.getElementById('root'));

=======
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import { createStore, applyMiddleware } from "redux";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
   </Provider>, 
  document.getElementById('root')
);
>>>>>>> e17719758f5ddc3b0ef7ad616b06a428f23a2611
