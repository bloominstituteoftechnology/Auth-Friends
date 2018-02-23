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
<<<<<<< HEAD
    this.setState( {[event.target.name]: event.target.value}
)};
=======
    this.setState( {[event.target.name]: event.target.value};
)}
>>>>>>> e17719758f5ddc3b0ef7ad616b06a428f23a2611

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
<<<<<<< HEAD
          <input type="submit" className="friendForm__form__input" onClick={this.handleAddFriend} />
=======
          <input type="submit" className="friendForm__form__input" onClick={handleAddFriend} />
>>>>>>> e17719758f5ddc3b0ef7ad616b06a428f23a2611
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

<<<<<<< HEAD
export default connect(mapStateToProps, { createFriend})(FriendForm);
=======
export default connect(mapStateToProps, { createFriend})(FriendForm);
>>>>>>> e17719758f5ddc3b0ef7ad616b06a428f23a2611
