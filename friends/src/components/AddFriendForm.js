import React from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions/index';

class AddFriendForm extends React.Component {
  state = {
    
      name: '',
      age: '',
      email: '',
    
  }
  inputHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <div>
        <h3>Add a friend:</h3>
        <form>
          <input onChange={this.inputHandler} type="text" name="name" placeholder="name"/>
          <input onChange={this.inputHandler} type="text" name="age" placeholder="age"/>
          <input onChange={this.inputHandler} type="text" name="email" placeholder="email"/>
          <button onClick={() => this.props.addFriend(this.state)}>Add</button>
        </form>
      </div>
    );
    
  }
}
 
//export default AddFriendForm;
export default connect(null, {addFriend})(AddFriendForm);

