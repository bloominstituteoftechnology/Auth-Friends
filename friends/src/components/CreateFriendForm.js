import React from 'react';
import { connect } from 'react-redux';
import { saveFriends } from '../actions';

class CreateFriendForm extends React.Component{
  state = {
    name: '',
    age: '',
    email: '',
  }
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" placeholder="Name:" value={this.state.name} onChange={this.handleName}/>
          <input type="text" name="age" placeholder="Age:" value={this.state.age} onChange={this.handleAge}/>
          <input type="text" name="email" placeholder="Email:" value={this.state.email} onChange={this.handleEmail}/>
          <button>Add New Friend!</button>
        </form>
      </div>
    )
  }
  handleName = (event) => {
    this.setState({name: event.target.value});
  }
  handleAge = (event) => {
    this.setState({age: event.target.value});
  }
  handleEmail = (event) => {
    this.setState({email: event.target.value});
  }
  handleSubmit = (event) => {
    event.preventDefault();
    console.log('state', this.state);
    this.props.saveFriends(this.state);
    this.setState({name: '', age: '', email:''})
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
  }
}

export default connect(mapStateToProps, { saveFriends })(CreateFriendForm)