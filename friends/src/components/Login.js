import React, { useState, useEffect } from "react";
import * as yup from 'yup';
import axios from "axios";


const formSchema = yup.object().shape({
    username: yup.string().required("Name is a required field."),
    password: yup.string().required("Must create a password"),
    terms: yup.boolean().oneOf([true], "Please agree to the terms of use"),
});


function Login() {

const [formState, setFormState] = useState({
    username: "",
    password: "",
    terms: "",
});

const [errors, setErrors] = useState({
    username: "",
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

const handleChange = e => {
    e.persist();
    const newFormData = {
      ...formState,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value
    };
    validateChange(e);
    setFormState(newFormData);
  };

  const handleSubmit = e => {
      e.preventDefault();
      axios
      .post("http://localhost:5000/api/login", formState)
      .then((res)=>{
        localStorage.setItem('token', res.data.payload);
          setNewForm(res.data);
          console.log("It works!", newForm)
          setFormState({
              username: "",
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
    <label htmlFor='username'>
      <input
        onChange={handleChange}
        type="text"
        name="username"
        value={formState.name}
        placeholder="Username"
      />
      {errors.username.length > 0 ? <p className='error'>{errors.username}</p> : null}
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

export default Login;