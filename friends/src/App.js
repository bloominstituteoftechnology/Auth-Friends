import React, { Component } from 'react';
import './App.css';
import FriendsList from './components/friendslist';
import { fetchFriends, addFriend } from './actions';
import { connect } from 'react-redux';
 
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: null,
      email: ''
    }
  }

  componentDidMount() {
    this.props.fetchFriends();
    // call our action
  }
  handleInputChange = event => this.setState({ 
    [event.target.name]: event.target.value 
  });
  clickHandler = event => {
    event.preventDefault();
    console.log('click handler',this.state)
    const { name, age, email } = this.state;
    this.props.addFriend({ name, age, email });
    this.setState({ name: '', age: '', email: '' });
  };

  render() {
    return(
    <div className="App">
      {this.props.isFetching ?(
        <h1>Please wait, loading friends...</h1>
      ):(
        <div className ='contact-container'>
          <FriendsList friends = {this.props.friends} />
          <form className='form'>
            <h3>Add a contact</h3>
            <input 
              name='name' 
              value={this.props.friends.name}
              placeholder='Name'
              onChange={this.handleInputChange}></input>
            <input 
              type='number'
              name='age' 
              value={this.props.friends.age}
              placeholder='Age'
              onChange={this.handleInputChange}></input>
            <input 
              name='email' 
              value={this.props.friends.email}
              placeholder='Email'
              onChange={this.handleInputChange}></input>
            <button onClick={this.clickHandler}>Submit</button>
          </form> 
        </div>
      )}
    </div>)
  }
}


const mapStateToProps = state => {
  console.log('mapping=', state)
  return {
    friends: state.friendsReducer.friends,
    isFetching: state.friendsReducer.isFetching 
  };
};
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(mapStateToProps,{ fetchFriends, addFriend })(App);
