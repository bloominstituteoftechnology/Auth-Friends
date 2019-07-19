import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axiosWithAuth from '../Protected/AxiosWithAuth'

const CreateFriend = ({touched, errors}) => {
  return(
    <div className='friend-form'>
      <Form className="form">
      <div className="form-group">
        <label className="label">Name</label>
        <Field
          className="input"
          name="name"
          type="text"
          autoComplete="off"
          />
        <p>{touched.name && errors.name}</p>
      </div>
      <div className="form-group">
        <label className="label">Age</label>
        <Field
          className="input"
          name="age"
          type="number"
          autoComplete="off"
        />
      </div>
      <p>{touched.age && errors.age}</p>
      <div className="form-group">
        <label className="label">Email</label>
        <Field
          className="input"
          name="email"
          type="email"
          autoComplete="off"
        />
      </div>
      <button className="btn">Submit &larr;</button>
    </Form>
    </div>
  )
}

export default withFormik({
  mapPropsToValues() {
    return {
      name: '',
      age: 0,
      email: ''
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .required()
      .min(3),
    age: Yup.string()
      .required(),
    email: Yup.string()
      .required()
      .email()
  }),
  handleSubmit(values, formikBag) {
    axiosWithAuth()
      .post('http://localhost:5000/api/friends', values)
      .then((response) => {
        formikBag.props.setFriends(response.data);
        formikBag.resetForm()
        console.log('checking for token data:', response.data)
      })
      // .catch((e) => {
      //   console.log(e.response.data);
      // });
  }
})(CreateFriend);