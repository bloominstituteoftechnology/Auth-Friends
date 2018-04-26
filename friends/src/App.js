import React, { Component } from 'react';
import './App.css';
import { getFriends, getFriend, addFriend, updateFriend, deleteFriend } from './actions';
import { connect } from 'react-redux';

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
    this.props.getFriends();
  }

  handleChange = (event) => {
    this.setState({ [event.target.name] : event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addFriend(this.state);
    this.setState({name: '', age: '', email: ''});
  }

  render() {
    return (
      <div>
        { this.props.error ?
          <div style={{color: "red"}}>
            { this.props.error }
          </div>
          : <div></div>
        }
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" placeholder="Name"
                 value={this.state.name} onChange={this.handleChange} />
          <input type="text" name="age" placeholder="Age"
                 value={this.state.age} onChange={this.handleChange} />
          <input type="text" name="email" placeholder="Email"
                 value={this.state.email} onChange={this.handleChange} />
          <button type="submit">Add Friend</button>
        </form>
        { this.props.friendsFetched
          ? this.props.friends.map((friend, index) => {
            return (
                <div key={index}>
                  { friend.name }
                </div>
              )
          })
          : <h3>FETCHING FRIENDS</h3>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state.friends,
    friendsFetched: state.friendsFetched,
    error: state.error
  }
}

export default connect(mapStateToProps,
            { getFriends, getFriend, addFriend, updateFriend, deleteFriend })(App);
