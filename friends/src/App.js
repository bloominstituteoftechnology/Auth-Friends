import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { fetchReq, submitReq, deleteReq, updateReq } from './actions';
import Friends from './components/Friends';
import SaveFriend from './components/SaveFriend';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      email: ''
    };
  }

  componentDidMount() {
    this.props.fetchReq();
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const friend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };

    this.props.submitReq(friend);
    this.setState({
      name: '',
      age: '',
      email: ''
    });
  };

  handleDelete = (id) => {
    this.props.deleteReq(id);
  };

  handleUpdate = (id) => {
    let friend = this.props.friends.filter((friend) => friend.id === id ? friend : null);
    console.log(friend);
    if(this.state.name === '' && this.state.age === '' && this.state.email === '') {
      return null;
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Redux - Friends</h1>
        </header>
        {this.props.fetched
          ? <Friends friends={this.props.friends} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate} />
          : <div>Loading...</div>}
        {this.props.fetched
          ? <SaveFriend handleChange={this.handleChange} handleSubmit={this.handleSubmit} name={this.state.name} age={this.state.age} email={this.state.email} />
          : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    friends: state.friendsReducer.friends,
    fetched: state.friendsReducer.fetched
  }
}

export default connect(mapStateToProps, { fetchReq, submitReq, deleteReq, updateReq })(App);
