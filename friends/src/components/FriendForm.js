import React, { useState } from 'react';


const initialValues = {
    name: "",
    age: "",
    email: "",
};

const FriendForm = (props) => {
    const [values, setValues] = useState(initialValues);

    const onChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = e => {
        e.preventDefault();
        props.onSubmit(values);
        setValues(initialValues);
    }

    return (
        <form onSubmit={onSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={onChange}
          />
    
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={values.age}
            onChange={onChange}
          />
    
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={onChange}
          />
    
          <button>Submit</button>
        </form>
      );
}

export default FriendForm;