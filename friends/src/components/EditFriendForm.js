import React from "react";
import { editFriend } from "../store/actions";
import { connect } from "react-redux";

class EditFriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      email: "",
      id: ''
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.editFriend(this.state.id, this.state);
    this.setState({
      name: "",
      age: "",
      email: "",
      id: '',
    });
  };

  //console.log('rendering')
  render() {
    return (
      <>
        <form onSubmit={this.submitHandler} autoComplete="nope">
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            value={this.state.name}
            placeholder="name"
            autoComplete="nope"
          />
          <input
            onChange={this.handleChange}
            type="number"
            name="age"
            value={this.state.age}
            placeholder="age"
            autoComplete="off"
          />
          <input
            onChange={this.handleChange}
            type="text"
            name="email"
            value={this.state.email}
            placeholder="email"
          />
          <input 
            onChange={this.handleChange}
            type='number'
            name='id'
            value={this.state.id}
            placeholder='id' />
          <button>Edit Friend</button>
        </form>
      </>
    );
  }
}

export default connect(
  null,
  { editFriend }
)(EditFriendForm);
