import React, { Component } from 'react';
import './App.css';
import FriendsList from './components/FriendsList';
import FriendsForm from './components/FriendsForm';
import { connect } from 'react-redux'; 
import { fetchingData } from './actions'; 

class App extends Component {
  constructor(props){
    super(props); 

  }

  componentDidMount = () =>{
    this.props.fetchingData(); 
  }

  render() {
    return (
      <div className="App">
        <FriendsForm />
        <FriendsList list = {this.props.friends} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state.friends
  }
}

export default connect(mapStateToProps, {fetchingData} )(App);
