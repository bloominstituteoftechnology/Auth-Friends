import React from 'react';
import { Form } from '../components';
import { addFriend } from '../actions';
import { connect } from 'react-redux';

const AddView = props => {
  return (
    <div className='add-container'>
    <h1>Add a friend</h1>
    <Form submit={props.addFriend} history={props.history}/>
    </div>
  )
}

const mapStateToProps = state => {
  return {

  }
}
export default connect(
  mapStateToProps,
  { addFriend }
)(AddView)
