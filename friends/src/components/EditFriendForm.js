import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editFriend } from "../actions";

class EditFriendForm extends Component {
constructor(props) {
    super(props);
    this.state = {
        name: "",
        age: "",
        email: "",
    };
}

inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

editFriend = (id) => {
    this.props.editFriend(this.state.name, this.state.age, this.state.email, id);
    this.setState({
        name: "",
        age: "",
        email: ""
    });
};

render() {
    return (
        <form onSubmit={(e) => {e.preventDefault(); this.editFriend(this.props.friend.id)}}>
          <input 
            onChange={this.inputHandler}
            name="name"
            value={this.state.name}
            type="text"
            placeholder="Name"
           />
           <input 
            onChange={this.inputHandler}
            name="age"
            value={this.state.age}
            type="number"
            placeholder="Age"
           />
           <input 
            onChange={this.inputHandler}
            name="email"
            value={this.state.email}
            type="email"
            placeholder="Email"
           />
           <button onClick={(e) => {e.preventDefault(); this.editFriend(this.props.friend.id)}}>Edit Friend</button>
           </form>
      );
    }
};

  export default connect( () => {}, {editFriend} )(EditFriendForm);