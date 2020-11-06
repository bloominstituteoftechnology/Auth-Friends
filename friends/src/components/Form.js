import React, { useState, useEffect } from "react";
import * as yup from 'yup';
import axios from "axios";


const formSchema = yup.object().shape({
    name: yup.string().required("Name is a required field."),
    email: yup.string().email("Must be a valid email address").required("Must include email address."),
    password: yup.string().required("Must create a password"),
    terms: yup.boolean().oneOf([true], "Please agree to the terms of use"),
});


function Form() {

const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    terms: "",
});

const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    terms: "",
  });


const [newForm, setNewForm] = React.useState([]);


const [buttonDisabled, setButtonDisabled] = useState(true);

useEffect(() => {
    formSchema.isValid(formState).then(valid => {
      setButtonDisabled(!valid);
    });
  }, [formState]);

const handleChange = event => {
    event.persist();
    const newFormData = {
      ...formState,
      [event.target.name]:
        event.target.type === "checkbox" ? event.target.checked : event.target.value
    };
    validateChange(event);
    setFormState(newFormData);
  };

  const handleSubmit = event => {
      event.preventDefault();
      axios.post("https://reqres.in/api/users", formState)
      .then(res => {console.log("1 It works!", newForm)
          setNewForm(res.data);
          console.log("2 It works!", newForm)
          setFormState({
              name: "",
              email: "",
              password: "",
              terms: "",
          });   
      })
      .catch(err => console.log(err.response));
  }

 const validateChange = event => {
    yup
    .reach(formSchema, event.target.name)
    .validate(event.target.value)
    .then(valid => {
      setErrors({
        ...errors,
        [event.target.name]: ""
      });
    })
    .catch(err => {
      setErrors({
        ...errors,
        [event.target.name]: err.errors[0]
      });
    });
};

  return (
    <form onSubmit={handleSubmit}>
    <label htmlFor='name'>
      <input
        onChange={handleChange}
        type="text"
        name="name"
        value={formState.name}
        placeholder="Name"
      />
      {errors.name.length > 0 ? <p className='error'>{errors.name}</p> : null}
      </label>
      <label htmlFor='email'>
      <input
        onChange={handleChange}
        type="text"
        name="email"
        value={formState.email}
        placeholder="Email"
      />
              {errors.email.length > 0 ? (
          <p data-cy="email-error-msg" className='error'>{errors.email}</p>
        ) : null}

      </label>

      <label htmlFor='password'>
      <input
        onChange={handleChange}
        type="password"
        name="password"
        value={formState.password}
        placeholder="Password"
      />

{errors.password.length > 0 ? (
          <p className='error'>{errors.password}</p>
        ) : null}
        </label>


<label htmlFor='terms' className='terms'>
        <input
          type='checkbox'
          name='terms'
          checked={formState.terms}
          onChange={handleChange}
        />
        Terms & Conditions
      </label>
      <pre>{JSON.stringify(newForm, null, 2)}</pre>
      <button type="submit" disabled={buttonDisabled}>Add User</button>
    </form>
);
  }

export default Form;