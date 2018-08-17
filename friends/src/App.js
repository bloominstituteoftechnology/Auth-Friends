import React, { Component } from 'react';
import './App.css';
import { fetchStuff, addFriend } from './store/actions';
import { connect } from 'react-redux';
import FriendList from './components/friendsList';
import FriendForm from './components/friendForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      email: ''
    }
  }

  componentDidMount() {
    this.props.fetchStuff();
  }

  handleInputChange = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  };

  addFriendHandler = ev => {
    ev.preventDefault();
    this.props.addFriend({
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    });
    this.setState({
      name: '',
      age: '',
      email: ''
    });
  }

  render() { 
    return (
      <div className="App">
        {this.props.fetchingFriends ? (<span>fabricating friends...</span>) : (
        <FriendList friends={this.props.friends} />)}
        <FriendForm handleInputChange={this.handleInputChange} inputEmail={this.state.email} inputAge={this.state.age} inputName={this.state.name} addFriendHandler={this.addFriendHandler} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friendsReducer.friends,
    error: state.friendsReducer.error,
    fetchingFriends: state.friendsReducer.fetchingFriends,
    friendsFetched: state.friendsReducer.friendsFetched,

  };
};

export default connect(mapStateToProps, { fetchStuff, addFriend })(App);
