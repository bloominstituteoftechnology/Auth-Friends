import React, { Component } from 'react';
import StyledForm from '../styles/StyledForm';

class Form extends Component {
  state = {
    friend: {
      name: '',
      age: '',
      email: ''
    }
  };
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { friend } = this.state;
    return (
      <StyledForm>
        <h2>{this.props.title}</h2>
        <div className="form-group">
          <label className="label" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            value={friend.name}
            name="name"
            className="text-input"
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="age">
            Age:
          </label>
          <input
            type="number"
            value={friend.age}
            name="age"
            className="text-input"
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="email">
            Email:
          </label>
          <input
            type="text"
            value={friend.email}
            name="email"
            className="text-input"
            onChange={this.handleInputChange}
          />
        </div>
        <button className="btn">{this.props.btnValue}</button>
      </StyledForm>
    );
  }
}

export default Form;
