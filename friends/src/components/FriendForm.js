import React, { Component } from "react";
import { connect } from "react-redux";

class FriendForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      age: "",
      email: "",
    }
  }

  handleInputChange = (event) => {
    this.setState( {[event.target.name]: event.target.value};
)}

handleAddFriend = (event) => {
  const { name, age, email } = this.state;
  this.props.createFriend({name, age, email})
  this.setState({name: "", age: "", email: ""});
}
  render() {
    return (
      <div className="friendForm">
        <form className="friendForm__form">
          <input type="text" className="friendForm__form__input" name="name" value={this.state.name} onChange={this.handleInputChange} />
          <input type="text" className="friendForm__form__input" name="age" value={this.state.age} onChange={this.handleInputChange} />
          <input type="text" className="friendForm__form__input" name="email" value={this.state.email} onChange={this.handleInputChange} />
          <input type="submit" className="friendForm__form__input" onClick={handleAddFriend} />
        </form>
      </div>
      )
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.error,
    creatingFriend: state.creatingFriend,
  }
}

export default connect(mapStateToProps, { createFriend})(FriendForm);