import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { fetchData } from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <div className="App">
        <h1>Friend List</h1>
        {
          this.props.fetchingFriends
            ? <img src={logo} />
            : <table>
              <thead>
                <tr>
                  <th> Name </th>
                  <th> Age </th>
                  <th> Email </th>
                  <th> Delete </th>
                  <th> Update </th>
                </tr>
              </thead>
              <tbody>
                {this.props.friends.map(friend => {
                  return (
                    <tr key={friend.id}>
                      <td>{friend.name}</td>
                      <td>{friend.age}</td>
                      <td>{friend.email}</td>
                      <td className="delete-update"><button className="deleteButton">X</button></td>
                      <td className="delete-update"><button className="updateButton">&#10004;</button></td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
        }
        <div className="add-form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name"/>
          <label htmlFor="age">Age</label>
          <input type="text" id="age"/>
          <label htmlFor="email">Email</label>
          <input type="text" id="email"/>
          <button className="add-button">Add Friend</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetchingFriends: state.fetchingFriends,
    friendsFetched: state.friendsFetched,
    friendsSaved: state.friendsSaved,
    savingFriends: state.savingFriends,
    updatingFriend: state.updatingFriend,
    friendUpdated: state.friendUpdated,
    deletingFriend: state.deletingFriend,
    friendDeleted: state.friendDeleted,
    friends: state.friends,
    error: state.error
  }
}

export default connect(mapStateToProps, { fetchData })(App);
