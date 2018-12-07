import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFriends, editFriend } from './actions';

import FriendsList from './components/FriendsList';
import FriendsForm from './components/FriendsForm';
import TopBar from './components/TopBar';

import './App.css';



class App extends Component {
  constructor(){
    super();
    this.state = {
      showAddForm: false,
    }
  }

  componentDidMount() {
    this.props.fetchFriends()
  }

  toggleAddForm = () => {
    this.setState({ showAddForm: !this.state.showAddForm })
  }

  render() {
    return (
      <div className="App">
        <TopBar toggleAddForm={this.toggleAddForm}/>
        <FriendsForm showAddForm={this.state.showAddForm}/>
        <FriendsList 
          friends={this.props.friends}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      friends: state.friends,
      fetching: state.fetching,
  }
}

export default connect(mapStateToProps, { fetchFriends, editFriend })(App);
