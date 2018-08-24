import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editFriend } from "../actions";
 class EditForm extends Component {
constructor(props) {
    super(props);
    this.state = {
        name: "",
        age: "",
        email: "",
    };
}
 inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
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
        <form onSubmit={(event) => {event.preventDefault(); this.editFriend(this.props.friend.id)}}>
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
           <button onClick={(event) => {event.preventDefault(); this.editFriend(this.props.friend.id)}}>Edit{this.state.name}</button>
           </form>
      );
    }
};
   export default connect( () => {}, {editFriend} )(EditForm);