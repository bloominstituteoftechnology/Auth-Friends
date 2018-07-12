import React from 'react';
import './App.css';

class EditFriend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: ''
    }
}
    editHandler = (e) => {
      this.setState({[e.target.name]: e.target.value});
    }

    updateFriend = (e) => {
      const name = this.state.name;
      const age = this.state.age;
      const email = this.state.email;
      e.preventDefault();
      this.props.handleUpdate(name, age, email, this.props.friendID);
    }


  render() {
  return (
    <div>
      <form>
      Name: <input placeholder="Name" type="text"
      onChange={this.editHandler} name="name" />
      <button onClick={this.updateFriend} value={this.state.name}>Save</button>
      </form>

      <form>
      Age: <input placeholder="Age" type="number"
      onChange={this.editHandler} name="age" />
      <button onClick={this.updateFriend} value={this.state.age}>Save</button>
      </form>

      <form>
      Email: <input placeholder="Email" type="text"
      onChange={this.editHandler} value={this.state.email} name="email" />
      <button onClick={this.updateFriend}>Save</button>
      </form>
    </div>
  )
}
}

export default EditFriend;
