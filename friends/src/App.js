import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {connect} from 'react-redux';
// import axios from 'axios';
import FriendForm from './components/FriendForm';
import FriendsList from './components/FriendsList';

// pull in actions from action/index
import { fetchFriends } from './store/actions';

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     friends: [],
  //     name: '',
  //     age: '',
  //     email: ''

  //   };
    componentDidMount() {
      // call our action
      this.props.fetchFriends();
    }

  // textInput = e => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  // saveFriendData = (event) => {
  //   event.preventDefault();
  //   const id = (this.state.friends[this.state.friends.length - 1].id + 1)
  //   const friend = {id: id, name: this.state.name, age: this.state.age, email: this.state.email};

  //   axios
  //     .post('http://localhost:5000/api/friends', friend)

  //     .then(response => 
  //           this.setState({ friends: response.data, name: '', age: '', email: ''})
  //         )
  //     .catch(err => {
  //       console.log(err);
  //     });
  //   // this.setState({name: '', age: '', email: ''});
  // };

  render() {
    return (
      <div className="App">
   
        {this.props.fetchingFriends ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <div>
             <FriendsList friends={this.props.friends} />
          </div>
          // <ul>
          //   {this.props.chars.map(char => {
          //     return <li key={char.name}>{char.name}</li>;
          //   })}
          // </ul>
        )}

        <div>
        <FriendForm 
            name={this.props.name} 
            age={this.props.age} 
            email={this.props.email} 
            saveFriendData={this.saveFriendData}
            textInputHandler={this.textInput}
        />
        </div>
        
      </div>
    );
  }
}

// export default App;

// our mapDispatchToProps needs to have two properties inherited from state
// the friends and the fetching boolean
const mapDispatchToProps = state => {
  return {
    friends: state.friendsReducer.friends,
    fetchingFriends: state.friendsReducer.fetchingFriends,
    error: state.friendsReducer.error
  };
};

export default connect(mapDispatchToProps, {
  /* actions go here */
  fetchFriends
})(App);

