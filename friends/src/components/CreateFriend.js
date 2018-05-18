import React, { Component } from 'react';

export class AddFriend extends Component {
  constructor(props) {
    super(props);
    this.state={
      name:'',
      age:'',
      email:''
    };
  }
 
  render() {
    return (
      const { id, name, age, email } = this.props.friend;
      <div>
	<h3>Add Friend</h3>
	{console.log(this.state, 'kelly')}
	<input
	name='name'
	placeholder='name'
	value={this.state.name}
	onChange={this.handleInput}
	/>;
      <input
	name='age'
	placeholder='age'
	value={this.state.age}
	onChange={this.handleInput}
	/>;
      <input
	name='email'
	placeholder='email'
	value={this.state.email}
	onChange={this.handleInput}
	/>;
      <button onClick={() => this.handleSubmit}>Add</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posting: state.posting,
    friends: state.friends
  };
};

export default connect(mapStateToProps, {createFriends})(AddFriend);
