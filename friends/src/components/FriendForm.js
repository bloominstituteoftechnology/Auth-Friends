import React from "react";
import { addFriend } from '../store/actions';
import { connect } from "react-redux";

class FriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      email: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.addFriend(this.state);
    this.setState({
        name: '',
        age: '',
        email: ''
    })
  };

  //console.log('rendering')
  render() {
    return (
      <>
        <form onSubmit={this.submitHandler}>
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            value={this.state.name}
            placeholder="name"
          />
          <input
            onChange={this.handleChange}
            type="number"
            name="age"
            value={this.state.age}
            placeholder="age"
          />
          <input
            onChange={this.handleChange}
            type="text"
            name="email"
            value={this.state.email}
            placeholder="email"
          />
          <button>Add Friend</button>
        </form>
      </>
    );
  }
}

export default connect(
    null, { addFriend })(FriendForm);
