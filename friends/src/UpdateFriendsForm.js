import React from 'react';
import { connect } from 'react-redux';

import { addFriend } from './Actions';
// import { clearCompleted } from './actions';

class UpdateFriendsForm extends React.Component {
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

  // submitHandler = event => {
  //   event.preventDefault();

  //   this.props.addFriend(this.state.inputText)
  //   this.setState({ inputText: "" })
  // }

  render() {
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        console.log(this.state)
        this.props.addFriend(this.state)
        this.setState({ name: "", age: "", email: "" })
      }}>
        <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.changeHandler}></input>
        <input type="text" placeholder="Age" name="age" value={this.state.age} onChange={this.changeHandler}></input>
        <input type="text" placeholder="Email" name="email" value={this.state.email} onChange={this.changeHandler}></input>
        <button type="submit" >Update</button>
        {/* <button type = "button" onClick={() => {this.props.clearCompleted()}}>Clear Completed</button> */}
      </form>
    );
  }
}
const mapStateToProps = state => {
  return {
    friends: state.friends
  }
}


export default connect(mapStateToProps, { addFriend: addFriend })(UpdateFriendsForm);