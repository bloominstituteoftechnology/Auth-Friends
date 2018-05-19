import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFriends, createFriend } from '../actions/actions.js';
import Friends from './Friends';
import { Button, Table, Form, FormGroup, Input, Label } from 'reactstrap';

export class App extends Component {

  constructor() {
    super();
    this.blankFriend = {
      name:'',
      age:'',
      email:''
    };

  this.state = {
    newFriend: this.blankFriend,
  };

  }

  componentDidMount() {
    this.props.fetchFriends();
  }

  handleInput = (event) => {
    this.setState({ newFriend: {...this.state.newFriend, ...{[event.target.name]: event.target.value} }});
  };

  handleSubmit = () => {
    this.props.createFriend(this.state.newFriend);
    this.setState({ newFriend: this.blankFriend });
  };

  render() {
    return (
      <div>
	<div>
	  <h3>Friends List</h3>
	  <div>
	  <Table>
	    <thead>
	      <tr>
		<th>ID</th>
		<th>Name</th>
		<th>Age</th>
		<th>Email</th>
	      </tr>
	    </thead>
	    <tbody>
	      {this.props.friends.map((friend, index) => <Friends key={index} friend={friend} />)}
      {/*Importing my Friends component here */}
            </tbody>
        </Table>
	</div>
	<Form>
	  <FormGroup>
	    <Label>Name</Label>
	      <Input
                 name='name'
	         placeholder='name'
	         value={this.state.newFriend.name}
	         onChange={this.handleInput}
	      />
	   </FormGroup>
	</Form>
	<Form>
	  <FormGroup>
	    <Label>Age</Label>
              <Input
	        name='age'
	        placeholder='age'
	        value={this.state.newFriend.age}
	        onChange={this.handleInput}
	      />
	  </FormGroup>
	</Form>
	<Form>
	  <FormGroup>
	    <Label>Email</Label>
              <Input
	        name='email'
	        placeholder='email'
	        value={this.state.newFriend.email}
	        onChange={this.handleInput}
	      />
	  </FormGroup>
          <Button onClick={this.handleSubmit}>Add</Button>
	</Form>
	</div>
	<div>

      </div>
    </div>
	  
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
   
  };
};

export default connect(mapStateToProps, {fetchFriends, createFriend })(App);

// This works just like my Smurfs App.js file.
