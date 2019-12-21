import React from "react";

import {setAlert} from './actions';
import Header from "./components/header";
import Friends from './components/friends';
import Login from './components/login';
import "./App.css";
import PrivateRoute from './components/privateRoute';
import Alert from './components/alert';
import { Route, Switch } from "react-router-dom";
import {connect} from 'react-redux';


function App(props) {

 const {setAlert} = props;

  return (
     

      <div className="App">
          <Header />
          <Alert />
          
        <Switch>
          <PrivateRoute path="/friends" component={Friends} />
          <Route path="/login" render = { (props) => <Login {...props} setAlert={setAlert}/>} />
          <Route component={Login} />
        </Switch>
        
        
        
      </div>

     
 
  );
}



const mapStateToProps = () => {
  return {
     
      
  }
}


export default connect(mapStateToProps, {setAlert})(App)