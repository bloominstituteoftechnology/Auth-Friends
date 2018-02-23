import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Friends from './Friends';
import FriendForm from './FriendForm';
import { getFriends } from '../actions';
import { connect } from 'react-redux'; 

class App extends Component {

	componentDidMount() {
     this.props.getFriends();
   }

   /* state = {
    friends: [],
     Friends: {
       name: '',
       age: '',
       email: '',
       phoneNumber: '',
       favoriteColor: '',
     },
      updateIndex: null,
  };*/

   /*    componentDidMount() {
        axios.get('http://localhost:5000/friends')
          .then((response) => {
           this.setState({
              friends: response.data,
              newFriend: this.state.newFriend,
              updateIndex: null,
            });
       })

          .catch((error) => {
            alert('There was an error: ', error);
            return;
          });
      }*/

     render() {
        return (
         <div className="App">
            <header className="App-header">
             <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Charlie, Russell and Eileen's Friends </h1>
             <FriendForm />
           </header>
            {this.props.error ? <h3>Error Fetching Friends</h3> : null}
            <div className="container">
              <div className="friend-grid">
                    <Friend friends={this.props.friends} />
              //     {this.state.friends.map((friend) => {
                  return (
                    <div key={friend.id} className="friend">
                      <h2 className="friend-name" id={`friend-name-${friend.id}`}>{friend.name}</h2>
                      <div className="friend-age">{`Age: ${friend.age}`}</div>
                      <div className="friend-email">{`Email: ${friend.email}`}</div>
                      <div className="friend-phone">{`Phone number: ${friend.phoneNumber}`}</div>
                      <div className="friend-favorite-color">{`Favorite color: ${friend.favoriteColor}`}</div>
                      <div className="friend-buttons">
                        <button type="button" id={`update-${friend.id}`} onClick={this.toggleUpdate}>Update</button>
                        <button type="button" id={`delete-${friend.id}`} onClick={this.deleteFriend}>Delete</button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <Friend updateName={this.updateName} updateAge={this.updateAge} updateEmail={this.updateEmail}
              updatePhone={this.updatePhone} updateFavoriteColor={this.updateFavoriteColor}
                onSubmit={this.submitRequest} />
          </div>
        );
     }
