import React, {Component} from 'react';
 import './App.css';
import Friends from './components/Friends';
import Lofin from './components/Login'
 import   FriendForm from './components/FriendForm';
 import friendsReducer from './reducers/rootReducer';
 import {getFriends} from './actions';
 import Friends from '../src/server'
 import {connect} from 'react-redux' ;
import rootReducer from './reducers/rootReducer';


 export default class App extends React.Component {
   render(){
   return (
      <div className = 'App'>
        <Route 
        path ='/'
        exact
        render ={() => (
          <HomePage/>
        )}
        />
        <Route 
        path ='/login'
        render ={props => (
           
          
            <Login {...props}/>
          )}
        
        />
        <PrivateRoute
        path="/protected"
        exact
        component={Friends}
      />
      </div>
   )
}
 }





 
  