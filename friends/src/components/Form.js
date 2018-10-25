import React from 'react';

class Form extends React.Component {
  constructor(props){
    super(props);
    console.log('in form', this.props);
    if (this.props.friend) {
        this.state = {
          id: this.props.friend.id,
          name: this.props.friend.name,
          age: this.props.friend.age,
          email: this.props.friend.email,
        }
    } else {
      this.state = {
        id: null,
        name: '',
        age: '',
        email: '',
      }
    }
  }

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.id) {
      const friend = {
        id: this.state.id,
        name: this.state.name,
        age: this.state.age,
        email: this.state.email,
      }
      this.props.submit(friend);
      this.setState({
        id: null,
        name: '',
        age: '',
        email: '',
      });
      this.props.history.push(`/${this.props.match.params.id}`);
      window.location.reload();
    }
      const friend = {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email,
      }
    this.props.submit(friend);
    this.setState({
      id: null,
      name: '',
      age: '',
      email: '',
    });
    this.props.history.push('/');
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
      <input
        name='name'
        type='text'
        value={this.state.name}
        placeholder='name'
        onChange={this.handleInput}
      />
      <input
        name='age'
        type='number'
        value={this.state.age}
        placeholder='age'
        onChange={this.handleInput}
      />
      <input
        name='email'
        type='text'
        value={this.state.email}
        placeholder='email'
        onChange={this.handleInput}
      />
      <button className='form button'>Done!</button>
      </form>
    )
  }
}

export default Form;
