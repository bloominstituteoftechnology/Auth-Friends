import React, { Component } from "react";
import { connect } from "react-redux";
import { createFriend } from '../actions';
import './FriendForm.css';

class FriendForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
     // name: "",
     // age: "",
     // email: "",
    } 
  }

  handleInputChange = (event) => {
    this.setState( {[event.target.name]: event.target.value}
)};

handleAddFriend = (event) => {
  const { name, age, email, phoneNumber, favoriteColor } = this.state;
  this.props.createFriend({name, age, email, phoneNumber, favoriteColor})
  this.setState({name: "", age: "", email: "", phoneNumber: "", favoriteColor: ""});
}
  render() {
    return (
      <form onSubmit={this.handleAddFriend}>
       <h2 id='form-header'>Add new friend:</h2>
       <input type="text" id="name" name="name" placeholder="Name" onChange={this.handleInputChange} />
       <input type="number" id="age" name="age"   placeholder="Age" onChange={this.handleInputChange} />
       <input type="text" id="email" name="email" placeholder="Email" onChange={this.handleInputChange} />
       <input type="text" id="phone" name="phoneNumber" placeholder="Phone number" onChange={this.handleInputChange} />
       <input type="text" id="favorite-color" name="favoriteColor" placeholder="Favorite color" onChange={this.handleInputChange} />
       <input type="submit" value="Submit" />
    </form>
   );
  } 
}

const mapStateToProps = (state) => {
  return {
    error: state.error,
 //   creatingFriend: state.creatingFriend,
  }
}

export default connect(mapStateToProps, { createFriend})(FriendForm);
