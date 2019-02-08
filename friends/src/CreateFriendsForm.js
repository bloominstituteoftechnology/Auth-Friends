import React from 'react';
import { connect } from 'react-redux';

import { addFriend } from './Actions';
import './createForm.css';

class CreateFriendsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: undefined,
      name: "",
      age: undefined,
      email: ""
    }
  }

  changeHandler = event => {
    event.preventDefault();
    let name = event.target.name;
    let value = event.target.value
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        this.props.addFriend(this.state)
        this.setState({ name: "", age: "", email: "" })
      }}>
        <label>Add a Friend:</label>
        <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.changeHandler}></input>
        <input type="text" placeholder="Age" name="age" value={this.state.age} onChange={this.changeHandler}></input>
        <input type="text" placeholder="Email" name="email" value={this.state.email} onChange={this.changeHandler}></input>
        <button type="submit" >Add Task</button>
      </form>
    );
  }
}
const mapStateToProps = state => {
  return {
    friends: state.friends
  }
}


export default connect(mapStateToProps, { addFriend: addFriend })(CreateFriendsForm);