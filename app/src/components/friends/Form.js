import React from 'react';
import { Form as FormikForm, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

class Form extends React.Component {

  componentDidUpdate(prevProps, prevState) {
    if (this.props.status !== prevProps.status && this.props.status) {
      this.props.setUpdate(!this.props.update);
    }
  }

  render() {
    return (
      <div className="form">
        <h1 style={{marginBottom: '0', color: 'rgb(89, 95, 99)', marginLeft: '-65px'}}>Add Friend</h1>
        <FormikForm style={{display: 'flex', flexDirection: 'column', margin: '20px'}}>
          <Field type="text" name="name" placeholder="Name" />
          {this.props.touched.name && this.props.errors.name && (
            <p className="error">{this.props.errors.name}</p>
          )}
          <Field type="email" name="email" placeholder="Email" />
          {this.props.touched.email && this.props.errors.email && (
            <p className="error">{this.props.errors.email}</p>
          )}
          <Field type="text" name="age" placeholder="Age" />
          {this.props.touched.age && this.props.errors.age && (
            <p className="error">{this.props.errors.age}</p>
          )}
          <button type="submit">Add</button>
        </FormikForm>
      </div>
    )
  }
}

const FormikOnboardingForm = withFormik({
  mapPropsToValues({ name, email, age }) {
    return {
      name: name || '',
      email: email || '',
      age: age || ''
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().required(),
    age: Yup.string().required()
  }),

  handleSubmit(values, { setStatus, resetForm }) {
    axiosWithAuth()
      .post('http://localhost:5000/api/friends', values)
      .then(res => {
        setStatus(res.data);
        resetForm();
      })
      .catch(err => console.log(err.response));
  }
})(Form);

export default FormikOnboardingForm;