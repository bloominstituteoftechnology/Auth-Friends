import React from 'react';
import ReactDOM from 'react-dom';
import Typography from 'typography';
import theme from 'typography-theme-judah';

import './index.css';
import App from './App';
import { fetchFriends } from './actions';

const typography = new Typography(theme);

typography.injectStyles();

fetchFriends()(() => {});

ReactDOM.render(<App />, document.getElementById('root'));
