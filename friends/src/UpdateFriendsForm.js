import React from 'react';
import { connect } from 'react-redux';

import { updateFriend } from './Actions';
import './updateForm.css';

class UpdateFriendsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      email: ""
    }
  }

  changeHandler = event => {
    event.preventDefault();
    let name = event.target.name;
    let value = event.target.value;    

    this.setState({
      ...this.state,
      [name]: value
    })
  }

  render() {
    return (
      <form className="updateForm" onSubmit={(e) => {
        e.preventDefault();
        console.log(this.state)
        this.props.updateFriend(this.state, this.props.id)
        this.setState({ name: "", age: "", email: "" })
      }}>
        <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.changeHandler}></input>
        <input type="text" placeholder="Age" name="age" value={this.state.age} onChange={this.changeHandler}></input>
        <input type="text" placeholder="Email" name="email" value={this.state.email} onChange={this.changeHandler}></input>
        <button type="submit">Update</button>
      </form>
    );
  }
}
const mapStateToProps = state => {
  return {
    friends: state.friends
  }
}


export default connect(mapStateToProps, { updateFriend: updateFriend })(UpdateFriendsForm);