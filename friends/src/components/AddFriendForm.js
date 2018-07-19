import React from 'react';

class AddFriendForm extends React.Component {
  state = {
    newFriend: {
      name: '',
      age: '',
      email: '',
    }
  }
  inputHandler = (e) => {
    this.setState({ [event.target.name]: event.target.value });
  }
  render() {
    <div>
      <h3>Add a friend:</h3>
      <form>
        <input onChange={props.inputHandler} type="text" name="name" placeholder="name"/>
        <input onChange={props.inputHandler} type="text" name="age" placeholder="age"/>
        <input onChange={props.inputHandler} type="text" name="email" placeholder="email"/>
        <button onClick={props.addFriend}>Add</button>
      </form>
    </div>
  }
}
 
export default connect(mapStateToProps, { })(AddFriendForm);

