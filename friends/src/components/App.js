import React, { Component } from 'react';
import { connect } from 'react-redux';

import FriendForm from './FriendForm';
import logo from './logo.svg';
import './App.css';

import { initFriends} from '../actions'

class App extends Component {
  componentDidMount(){
    this.props.initFriends()
  }

  // state = {
  //   name: '',
  //   age: '',
  //   email: ''
  // };

  // handleInputChange = event => {
  //   this.setState({ [event.target.name]: event.target.value })
  // }

  // handleAddFriend = _ => {
  //   const { name, age, email } = this.state;
  //   this.props.addFriends({name, age, email});
  //   this.setState({name: '', age: '', email: ''});
  // };

  render() {
    return (
      <div className="App">
        {this.props.friending ? (
          <img src={logo} className="App-logo" alt="logo" />
        ):(
          <div className="Friends__Section">
            {this.props.friends.map(friend => {
              return( 
              <div className="Friends__List"  key={friend.id}>
                <ul>
                  <li className="Friend_Item" id="id">{friend.id}</li>
                  <li className="Friend_Item">{friend.name}</li>
                  <li className="Friend_Item">{friend.age}</li>
                  <li className="Friend_Item">{friend.email}</li>
                </ul>
              </div> 
              )
            })}
            </div>  
        )}
        <div className="Friends__Form">
        <FriendForm />
          </div>
      </div>

     
    );
  }
}

const mapStateToProps = state => {
  return {
    friending: state.friending,
    friends: state.friends,
    error: state.errorMessage,
  };
};

export default connect(mapStateToProps, { initFriends })(App);
