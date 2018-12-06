import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {addFriend} from '../actions';

const StyledForm = styled.form`
  max-width: 40%;
  margin: 0 auto;
  background-color: #0e0e13;
  border: 1px solid black;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;

  input {
    width: 50%;
    padding: 5px;
    margin: 3px;
    font-size: 16px;
  }
`;

class FriendForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      email: '',
    };
  }

  componentDidUpdate(prevProps) {
    console.log('cdm,', this.props);
    if (this.props.selected !== prevProps.selected) {
      const f = this.props.selected;
      this.setState({name: f.name, age: f.age, email: f.email});
    }
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('submit');
    this.props.addFriend(this.state);
    this.setState({
      name: '',
      age: '',
      email: '',
    });
  };

  render() {
    console.log('form render', this.props);
    const createInput = (name, type = 'text') => {
      return (
        <input
          type={type}
          placeholder={name}
          name={name}
          value={this.state[name]}
          onChange={this.handleChange}
        />
      );
    };
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        {createInput('name')}
        {createInput('age', 'number')}
        {createInput('email', 'email')}
        <input type="submit" />
      </StyledForm>
    );
  }
}

//const mapStateToProps = state => {
//return {
//selected: state.selected,
//};
//};

export default connect(
  null,
  {addFriend},
)(FriendForm);
