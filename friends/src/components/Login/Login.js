import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import './Login.scss';

function Login({ touched, errors }) {
  const token = localStorage.getItem('token');

  if (token) {
    return <Redirect to="/" />;
  }

  return (
    <Form className="form">
      <div className="form-group">
        <label className="label">Username</label>
        <Field
          className="input"
          name="username"
          type="username"
          autoComplete="off"
        />
        <p>{touched.username && errors.username}</p>
      </div>
      <div className="form-group">
        <label className="label">Password</label>
        <Field
          className="input"
          name="password"
          type="password"
          autoComplete="off"
        />
      </div>
      <p>{touched.password && errors.password}</p>
      <button className="btn">Submit &larr;</button>
    </Form>
  );
}

export default withFormik({
  mapPropsToValues() {
    return {
      username: '',
      password: ''
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .required()
      .min(3),
    password: Yup.string()
      .required()
      .min(6)
  }),
  handleSubmit(values, formikBag) {
    axios
      .post('http://localhost:5000/api/login', values)
      .then((response) => {
        localStorage.setItem('token', response.data.payload);
        console.log('checking for token data:', response.data.payload)
        formikBag.props.history.push('/');
        formikBag.props.setToken(response.data.payload)
      })
      .catch((e) => {
        console.log(e.response.data);
      });
  }
})(Login);
