import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

import { getFriends, addNewFriend } from './actions';

import FriendsList from './containers/FriendsList'


class App extends Component {

    state = {
      newName: '',
      newAge: '',
      newEmail: ''
    };

    
    
  componentDidMount() {
    this.props.getFriends();
  }


  render() {
    let nameInput, ageInput, emailInput = '';
    
    return (
      <div className="App">
        {this.props.fetching ? (
        <img src={logo} alt=""/> ) : (<FriendsList />)}
        
        <form onSubmit={(event) => {
          event.preventDefault();
          this.props.addNewFriend({name: nameInput.value, age: ageInput.value, email: emailInput.value})
          ageInput.value = ''; 
          emailInput.value = '';
          nameInput.value = '';
          document.getElementById('name_field').focus();
          }}>
          <input className='inputField' ref={name => nameInput = name} placeholder='New Friend Name' autoFocus='true' id='name_field'/>
          <input className='inputField' ref={age => ageInput = age} placeholder='Age'/>
          <input className='inputField' ref={email => emailInput = email} placeholder='email'/>
          <button type='submit'>Add New Fiend</button>
        </form>
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    friends: state.friends,
    error: state.errorMessage
  }
}
export default connect(mapStateToProps, { getFriends, addNewFriend })(App);
