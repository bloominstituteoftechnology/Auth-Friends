import React, { useState } from 'react'
import { axiosWithAuth } from '../utlis/axiosWithAuth';

const initialValues = {
  name: '',
  age: '',
  email: '',
}


export default function AddForm() {
  const [formValues, setFormValues] = useState(initialValues);

  const handleSubmit = e => {
    e.preventDefault();
    const friendToAdd = {
      name: formValues.name,
      age: formValues.age,
      email: formValues.email,
    }
    axiosWithAuth()
      .post('http://localhost:5000/api/friends', friendToAdd)
      .then(res => {
        setFormValues(initialValues);
      })
  }

  const handleChange = e => {
    setFormValues({
      ...formValues, [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input type='text' name='name' value ={formValues.name} onChange={handleChange}/>
        <label htmlFor='age'>Age:</label>
        <input type='text' name='age' value ={formValues.age} onChange={handleChange}/>
        <label htmlFor='email'>Email:</label>
        <input type='text' name='email' value ={formValues.email} onChange={handleChange}/>
        <button>Submit</button>
      </form>
    </div>
  )
}
