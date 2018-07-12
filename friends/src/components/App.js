import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import './App.css';
import { getFriends, addFriend, updateFriend } from '../actions';
// pull in actions from action/index

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      age: ''
    }
  }

  componentDidMount() {
    // call our action 
    this.props.getFriends();
  }

  handleSubmit = () => {
    console.log('this.props handle submit', this.props)
    this.props.addFriend(this.state)
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    console.log('this.props.friends', this.props.friends)
    return (
      // <div className="App">
      //   {this.props.fetching ? (
      //     <img src={logo} className="App-logo" alt="logo" />
      //   ) : (
      //     <ul>
      //       {this.props.chars.map(char => {
      //         return <li key={char.name}>{char.name}</li>;
      //       })}
      //     </ul>
      //   )}
      // </div>
      <div className="App">
      <input 
        name="firstName" 
        type="text" 
        placeholder="First Name" 
        onChange={(e) => this.handleChange(e)} /><br />
      <input 
        name="lastName" 
        type="text" 
        placeholder="Last Name" 
        onChange={(e) => this.handleChange(e)} /><br />
      <input 
        name="age" 
        type="text" 
        placeholder="Age" 
        onChange={(e) => this.handleChange(e)} /><br />
      <button onClick={() => this.handleSubmit()}>Submit</button>

      {this.props.friends.map(friend => {
        return ( 
          <div key={friend.id}>
            <div>
              First Name: {friend.name}
            </div>
            <div>
              Last Name:{friend.age}
            </div>
            <div>
              Age: {friend.email}
            </div>
            <button onClick={() => this.handleDelete(friend.id)}>X</button>
          </div>
        ); 
      })}  
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state.friendsReducer', state.friendsReducer)
  console.log('this.props', this.props) 
  return state.friendsReducer;
}
// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
export default connect(mapStateToProps, {
  /* actions go here */
  getFriends,
  addFriend,
  updateFriend
})(App);
