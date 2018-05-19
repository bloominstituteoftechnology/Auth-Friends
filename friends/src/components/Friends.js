import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { deleteFriend } from '../actions/actions.js';


export class Friends extends Component {
  handleDelete = (id) => {
    this.props.deleteFriend(id);
  };
  
  render() {
    const {id, name, age, email} = this.props.friend;
    return (
      <tr>
	<td>{id}</td>
	<td>{name}</td>
	<td>{age}</td>
	<td>{email}</td>
	{/*	<Button onClick={() => this.handleDelete(id)}>Delete</Button> */}
      </tr>
      
      // Sadly, my delete functionality is not working for some reason, even though it works in my Smurfs code and this is basically the same. Maybe there's a typo somewhere. I don't think the delete part is required so I'm leaving it like this for now and might come back later when my brain is less fried.
      
    );
  }
}

const mapStateToProps = state => {
  return {
  };
};

export default connect(mapStateToProps, { deleteFriend })(Friends);


