import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

import { getFriends, addNewFriend } from './actions';



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
        <img src={logo}/> )
          :
          (
            <div>
              {this.props.friends.map(friend => {
                return (
                  <div>
                    <div>{friend.name}</div>
                    <div>{friend.age}</div>
                    <div>{friend.email}</div>
                    <br/>
                  </div>
                )
              })}
            </div>
          )
        }
        <form onSubmit={(event) => {
          event.preventDefault();
          console.log(nameInput.value);
          this.props.addNewFriend({name: nameInput.value, age: ageInput.value, email: emailInput.value})
          nameInput.value, ageInput.value, emailInput.value = '';
          }}>
          <input ref={name => nameInput = name} placeholder='New Friend Name'/>
          <input ref={age => ageInput = age} placeholder='Age' />
          <input ref={email => emailInput = email} placeholder='email'/>
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
