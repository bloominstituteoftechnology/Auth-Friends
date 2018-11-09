import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'; 
import { NavLink, Route } from 'react-router-dom';
import Friend from './Components/Friend'; 
import { getFriends } from './Actions/actions';
import AddForm from './Components/AddFriend';

class App extends Component {
  
  componentDidMount(){
    this.props.getFriends();
  }

  render() {
    return (
      <div className="App">
        <header>Friends</header>
        <NavLink to="/add">Add a new friend</NavLink>
        <AddForm />
          {this.props.friends.map( friend =>
            <Friend friend={friend} key={friend.id} />
          )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state.friends,
    error: state.error,
    loading: state.loading
 }
};

 export default connect(mapStateToProps, {getFriends})(App);
