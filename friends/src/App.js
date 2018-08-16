import React, { Component } from 'react';
import './App.css';
import FriendsList from './components/FriendsList';
import FriendsForm from './components/FriendsForm';
import { connect } from 'react-redux'; 
import { fetchingData, savingFriends } from './actions'; 

class App extends Component {
  constructor(props){
    super(props); 
    this.state = {
      name: '', 
      age: '', 
      email: '', 
    }
  }

  componentDidMount = () =>{
    this.props.fetchingData(); 
  }

  changeInputHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitFormDataHandler = () => {
    const friend = {
      name: this.state.name, 
      age: this.state.age, 
      email: this.state.email
    }

    this.props.savingFriends(friend);
  }

  render() {
    return (
      <div className="App">
        <FriendsForm  submit = {this.submitFormDataHandler} change = {this.changeInputHandler} />
      {this.props.fetching ? (
      <p> Loading Friends... </p>) 
      : ( <FriendsList list = {this.props.friends} />)
      }
       
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    fetching: state.fetchingFriends,
    friends: state.friends
  }
}

export default connect(mapStateToProps, {fetchingData, savingFriends} )(App);
