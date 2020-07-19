import React, { useState } from 'react';
import { axioswithAuth } from '../utils/axioswithAuth';

const FriendForm = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    age: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    axioswithAuth()
      .post('api/friends', formValues)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={submitForm}>
      <input
        type='text'
        name='name'
        value={formValues.name}
        onChange={handleChange}
      />
      <input
        type='text'
        name='age'
        value={formValues.age}
        onChange={handleChange}
      />
      <input
        type='text'
        name='email'
        value={formValues.email}
        onChange={handleChange}
      />
      <button>Add Friend</button>
    </form>
  );
};

export default FriendForm;
