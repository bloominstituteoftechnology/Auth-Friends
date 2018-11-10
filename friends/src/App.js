import React from 'react';
import './App.css';

import { connect } from 'react-redux';
import { addingFriendAction, fetchingFriendsAction } from './actions/friendsActions';

// import { Route, Link } from 'react-router-dom';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      Name: '',
      Age: '',
      Email: '',
    };
  }
  componentDidMount = (e) => {
    this.props.fetchingFriendsAction();
  }
  inputChangeHandler = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    this.setState({ [e.target.placeholder]: e.target.value });
    // console.log(this.state.Name, this.state.Age, this.state.Email);
  };
  addFriendHandler = (e) => {
    const addFriendInputs = document.querySelectorAll('.add-friend-inputs');
    // console.log(addFriendInputs[2].value);
    if(addFriendInputs[0].value && addFriendInputs[1].value && addFriendInputs[2].value !== ''){
      this.props.addingFriendAction(this.state.Name, parseInt(this.state.Age, 10), this.state.Email);
      this.setState({
        Name: '',
        Age: '',
        Email: '',
      })
      Array.from(addFriendInputs).map(x => {
        return x.value = ''
      })
    }
    // console.log(Array.from(addFriendInputs).map(x => {
    //   return x.value
    // }));
  }
  render() {
    return (
      <div className="App">
        <h1>Friends List:</h1>
        <div className='friend-form'>
          <input className='add-friend-inputs' placeholder='Name' onChange={this.inputChangeHandler}></input>
          <input className='add-friend-inputs' placeholder='Age' onChange={this.inputChangeHandler}></input>
          <input className='add-friend-inputs' placeholder='Email' onChange={this.inputChangeHandler}></input>
          <button onClick={this.addFriendHandler}>Add Friend:</button>
        </div>
        <div className='friends-list'>
          {this.props.friends.friends.map((x) => {
            return (
              <div key={x.id} className='each-friend'>
                <p>Name: {x.name}</p>
                <p>Age: {x.age}</p>
                <p>Email: {x.email}</p>
                <form className='friend-form'>
                  <input placeholder='Name'></input>
                  <input placeholder='Age'></input>
                  <input placeholder='Email'></input>
                  <button>Update Friend:</button>
                  <button>Delete Friend:</button>
                </form>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    fetchingFriends: state.fetchingFriends,
    friendsFetched: state.friendsFetched,
    savingFriends: state.savingFriends,
    friendsSaved: state.friendsSaved,
    updatingFriend: state.updatingFriend,
    friendUpdated: state.friendUpdated,
    deletingFriend: state.deletingFriend,
    friendDeleted: state.friendDeleted,
    friends: state.friends,
    error: state.error,
  }
}

export default connect(mapStateToProps, {addingFriendAction, fetchingFriendsAction})(App);
