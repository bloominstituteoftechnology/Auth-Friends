// React
import React from 'react';
import ReactDOM from 'react-dom';

// Dependencies
import registerServiceWorker from './registerServiceWorker';

// Components
import App from './App';

// Styles
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
