import React from 'react';
import { Form as FormikForm, Field, withFormik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';

class Login extends React.Component {

  componentDidUpdate(prevProps, prevState) {
    if (this.props.status !== prevProps.status && this.props.status) {
      this.props.history.push('/friends');
    }
  }

  render() {
    return (
      <div className="form">
        <h1 style={{marginBottom: '0', color: 'rgb(89, 95, 99)'}}>Login</h1>
        <FormikForm style={{display: 'flex', flexDirection: 'column', margin: '20px'}}>
          <Field type="text" name="username" placeholder="Username" />
          {this.props.touched.username && this.props.errors.username && (
            <p className="error">{this.props.errors.username}</p>
          )}
          <Field type="password" name="password" placeholder="Password" />
          {this.props.touched.password && this.props.errors.password && (
            <p className="error">{this.props.errors.password}</p>
          )}
          <button type="submit">Login</button>
        </FormikForm>
      </div>
    )
  }
}

const FormikOnboardingForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || '',
      password: password || '',
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required()
  }),

  handleSubmit(values, { setStatus, resetForm }) {
    axios
      .post('http://localhost:5000/api/login', values)
      .then(res => {
        setStatus(res.data);
        localStorage.setItem('token', res.data.payload);
      })
      .catch(err => console.log(err.response));
  }
})(Login);

export default FormikOnboardingForm;