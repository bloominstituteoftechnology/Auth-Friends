import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'; 
import { NavLink, Route } from 'react-router-dom';
import Friend from './Components/Friend'; 

class App extends Component {
  constructor(props){
    super(props); 
  }
  render() {
    return (
      <div className="App">
        <header>Friends</header>
        <NavLink to="/add">Add a new friend</NavLink>
          {this.props.friends.map( friend =>
            <Friend friend={friend} key={friend.id} />
          )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  friends: state.friends
});
 export default connect(mapStateToProps)(App);
