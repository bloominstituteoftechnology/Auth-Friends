import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

// import Login from './Components/Login';
// import PrivateRoute from './utils/PrivateRoute';
import NavHeader from './Components/NavHeader';
import Routes from './utils/Routes';

import 'semantic-ui-css/semantic.min.css';
import {Container} from 'semantic-ui-react';



function App() {
  return (
   <Router>
      <NavHeader />
     <Container>
     <div className="App">
       <Routes />
    </div>
    </Container>
   </Router>
  );
}

export default App;