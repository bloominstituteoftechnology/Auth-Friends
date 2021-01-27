import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import './Login.scss';

// Yup validation
const validationSchema = Yup.object({
  username: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});

const Login = props => {
  // setting formik initial values
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      axios
        .post('http://localhost:5000/api/login', {
          username: values.username,
          password: values.password,
        })
        .then(res => {
          console.log('Props', props);
          console.log('Resource', res.data);
          localStorage.setItem('token', res.data.payload);
          props.history.push('/friends');
        })
        .catch(err => {
          console.log('Error', err);
        });
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <input
          className='login-input'
          id='username'
          name='username'
          label='Username'
          placeholder='Username'
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.touched.username && Boolean(formik.errors.username)}
        />
        <input
          className='login-input'
          id='password'
          name='password'
          label='Password'
          placeholder='Password'
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.username && Boolean(formik.errors.username)}
        />
        <button type='submit'>Login</button>
      </form>
    </>
  );
};

export default Login;
