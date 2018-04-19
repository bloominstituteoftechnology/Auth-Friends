import React, { Component } from "react";

class CreateFriendForm extends Component {
    state = {
        name: "",
        age: "",
        email: ""
    };
    componentDidMount() {
        this.props.fetchFriends();
        console.log(this.props);
      }
      onInputChange = event => {
          this.setState({
           [event.target.name]: event.target.value   
          });
      }
      onFormSubmit = () => {
         this.props.addFriend({
             name: this.state.name,
             age: this.state.age,
             email: this.state.email
            });
            this.setState({ name: "", age: "", email: ""});
      }
      render() {
          return(
          <form onSubmit={this.onFormSubmit}>
          <input 
          type='text'
          name='name'
          placeholder="Name"
          value={this.state.name}
          onChange={this.onInputChange}
          />
           <input 
          type='text'
          name='age'
          placeholder="Age"
          value={this.state.age}
          onChange={this.onInputChange}
          />
           <input 
          type='text'
          name='email'
          placeholder="Email"
          value={this.state.email}
          onChange={this.onInputChange}
          />
          <button type='submit'>Add Friend</button>
          </form>
          {this.props.friends.map(friend => { 
             <Friend key={friend.name}>{friend.name}/>
      )}
    }

