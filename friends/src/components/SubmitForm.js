import React from 'react';

const SubmitForm = props => {
  // console.log('Submit Form');
  // console.log(props);
  // console.log(props.state.name);
  return (
    <React.Fragment>
      <form onSubmit={(e) => {
        e.preventDefault()
        props.handleSubmit()}
      }>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={props.state.name}
          onChange={props.handleChange}
        />
        <input
          type="number"
          name="age"
          placeholder="age"
          value={props.state.age}
          onChange={props.handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="email"
          value={props.state.email}
          onChange={props.handleChange}
        />
        <input type="submit" value='Submit' />
      </form>
    </React.Fragment>
  )
}

export default SubmitForm
