import React from 'react';

const initState = {
  name: '',
  age: '',
  email: '',
};

class FriendsForm extends React.Component {
  state = initState;

  handleChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value });

  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          this.props.onFormSubmit(this.state);
          this.setState(initState);
        }}
      >
        <div>
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            placeholder="Enter name"
            value={this.state.name}
          />
        </div>
        <div>
          <input
            onChange={this.handleChange}
            type="number"
            name="age"
            placeholder="Enter age"
            value={this.state.age}
          />
        </div>
        <div>
          <input
            onChange={this.handleChange}
            type="email"
            name="email"
            placeholder="Enter email"
            value={this.state.email}
          />
        </div>
        <button>Submit</button>
      </form>
    );
  }
}

export default FriendsForm;
