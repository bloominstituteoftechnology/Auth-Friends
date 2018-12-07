import React from 'react';

class AddFriendForm extends React.Component {
  state = {
    name: '',
    age: '',
    email: '',
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.addFriend({
      name: this.state.name,
      age: Number(this.state.age),
      email: this.state.email,
    });
    this.setState({
      name: '',
      age: '',
      email: '',
    });
  }

  render() {
    if (this.props.isAddingFriend) {
      return <h3>Adding a Friend ... </h3>
    } else {
      return (
        <div className="add-friend-form">
          <h3>Add a Friend</h3>
          <form action="submit" onSubmit={this.onSubmit}>
            <input
              name="name"
              value={this.state.name}
              onChange={this.onChange}
              type="text"
              placeholder="Add friend's name"
            />
            <input
              name="age"
              value={this.state.age}
              onChange={this.onChange}
              type="text"
              placeholder="Add friend's age"
            />
            <input
              name="email"
              value={this.state.email}
              onChange={this.onChange}
              type="text"
              placeholder="Add friend's email"
            />
            <button type="submit">Add</button>
          </form>
        </div>
      );
    }
  }
}

export default AddFriendForm;