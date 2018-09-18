import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { fetchFriends, postFriend } from './actions/index';
import { connect } from 'react-redux';
import Friend from './components/Friend';


class App extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      email: '',
      age: 0,
    };
  }

  componentDidMount() {
    this.props.fetchFriends();
  }



  saveFriend = () => {
    const newFriend = {
      name: this.state.name,
      email: this.state.email,
      age: this.state.age,
    }
    this.props.postFriend(newFriend);
    this.setState({
      name: '',
      email: '',
      age: '',
    })
  }

  handleNewFriend = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          {this.props.fetching ? (
            <p>LOADING FRIENDS . . .</p>
            ) : (
              <div>
                {this.props.friends.map(friend => {
                  return <Friend key={friend.id} friend={friend} />
                })}
              </div>
            )
          }
        </div>
        <form>
          Name:
          <input
            type="text"
            onChange={this.handleNewFriend}
            value={this.state.name}
            name='name'
          /><br />
          Email:
          <input
            type="text"
            onChange={this.handleNewFriend}
            value={this.state.email}
            name='email'
          /><br />
          Age:
          <input
            type="number"
            onChange={this.handleNewFriend}
            value={this.state.age}
            name='age'
          />
        </form>
        <button onClick={ this.saveFriend }>Submit New Friend</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    error: state.error,
    fetching: state.fetching,
  }
}

export default connect(mapStateToProps, { fetchFriends, postFriend })(App);
