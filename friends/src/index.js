import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import 'react-bulma-components/dist/react-bulma-components.min.css';


ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);


