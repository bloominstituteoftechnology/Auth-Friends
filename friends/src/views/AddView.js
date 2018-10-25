import React from 'react';
import { Form } from '../components';
import { addFriend } from '../actions';
import { connect } from 'react-redux';

const AddView = props => {
  return (
    <Form submit={props.addFriend} history={props.history}/>
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
