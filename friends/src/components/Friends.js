import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFriends, createFriends } from '../actions/actions.js';

export class Friends extends Component {

  constructor(props) {
    super(props);
    this.state= {
      friends:[],
      name:'',
      age:'',
      email:''
    };
  }
  
  componentDidMount() {
    this.props.fetchFriends();
    this.setState({ friends: this.props.friends });   
  }

  handleInput = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = () => {
    const friend = { name: this.state.name, age: this.state.age, email: this.state.email};
    this.props.createFriends(friend);
    this.setState({ name:'', age:'', email:''});
  };

  render() {
    return (
      <div>
	<div>
	<h3>Add Friend</h3>
	<input
	name='name'
	placeholder='name'
	value={this.state.name}
	onChange={this.handleInput}
	/>
      <input
	name='age'
	placeholder='age'
	value={this.state.age}
	onChange={this.handleInput}
	/>
      <input
	name='email'
	placeholder='email'
	value={this.state.email}
	onChange={this.handleInput}
	/>
      <button onClick={() => this.handleSubmit}>Add</button>
      <h6>{this.state.friends}</h6>
	</div>
	<div>
	  <h3>Friends List</h3>
	{this.props.friends.map((friend,index) => (
	  <ul key={index} friend={friend}>
	  <li>{friend.name}</li>
	  <li>{friend.age}</li>
	  <li>{friend.email}</li>
	  </ul>
	))}
      </div>
    </div>
	  
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    fetching: state.fetching,
    fetched: state.fetched,
    posting: state.posting
  };
};

export default connect(mapStateToProps, { fetchFriends,createFriends })(Friends);
