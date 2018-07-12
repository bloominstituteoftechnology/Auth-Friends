import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class NewFriend extends Component {
  renderField (field) {
    return (
      <div>
        <label>{field.label}</label>
        <input {...field.input} />
      </div>
    )
  }
  render () {
    return (
      <form>
        <Field
          name='name'
          label='Enter Contact Name'
          component={this.renderField}
        />
        <Field name='age' label='Enter Age' component={this.renderField} />
        <Field name='email' label='Enter Email' component={this.renderField} />
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default reduxForm({ form: 'NewFriendForm' })(NewFriend)
