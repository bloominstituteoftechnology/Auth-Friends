import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import FriendCard from './FriendCard'
import AddFriend from './AddFriend'
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetched, deleted } from './actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: ''
    };
  }

  componentDidMount = () => {
    this.props.fetched();
  }

  updateDataText = e => {
    this.setState({ [e.target.name]: e.target.value });
  }
  updateFriend = id => {
    axios.put(`http://localhost:5000/friends/${id}`, { name: this.state.name, age: this.state.age, email: this.state.email })
      .then((data) => this.setState({
        friends: data.data,
        name: '',
        age: '',
        email: ''
      }))
      .catch(err => console.log(err));
  }

  postNewFriend = e => {
    axios.post('http://localhost:5000/friends', { name: this.state.name, age: this.state.age, email: this.state.email })
      .then((data) => this.setState({
        friends: data.data,
        name: '',
        age: '',
        email: ''
      }))
      .catch(err => console.log(err));
  }
  deleteFriend = id => {
    this.props.deleted(id);
  }
//{...props} friends={this.props.friends} delete={this.deleteFriend} update={this.updateFriend} 
  render() {
    // console.log(this.state)
    return (
      <div className="App">
        <h1>Awesome Friendslist!</h1>
        <p>Should you have any</p>
        <div className="friend-list">
          <Route path="/" render={(props) => <FriendCard />} />
        </div>
        <Route exact path="/updatefriend" render={(props) => <AddFriend {...props} name={this.state.name} age={this.state.age} email={this.state.email} function={this.updateDataText} function2={this.postNewFriend} />} />
        <Route exact path="/addfriend" render={(props) => <AddFriend {...props} name={this.state.name} age={this.state.age} email={this.state.email} function={this.updateDataText} function2={this.postNewFriend} />} />
        <Link className="btn btn-secondary" to="/addfriend">Add a Friend</Link>
        <Link className="btn btn-secondary" to="/updatefriend">Update a Friend</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state.friends,
    fetchStatus: state.fetchingFriends,
    updateStatus: state.updatingFriend,
    deleteStatus: state.deletingFriend,
    savingStatus: state.savingFriends,
    error: state.error
  }
}

export default connect(mapStateToProps, {
  fetched,
  deleted,
})(App);