import React from 'react'
import { withFormik, Form, Field } from 'formik'
import { axiosWithAuth } from '../utils/axiosWithAuth'



const NewFriend = ( ) => {
return(
 <Form className="form">
   <div className="form-group">
     <label className="label">Name</label>
     <Field className="input" name="name" type="name" />
   </div>
   <div className="form-group">
     <label className="label">Age</label>
     <Field className="input" name="age" type="text" />
   </div>
   <div className="form-group">
     <label className="label">Email</label>
     <Field className="input" name="email" type="email" />
   </div>
   <button type="submit" className="btn">
     Submit &rarr;
   </button>
 </Form>
  )
}
export default withFormik({
  mapPropsToValues() {
    return {
      name: "",
      age: "",
      email: ""
    };
  },
  handleSubmit(values, formikBag) {
  // console.log(formikBag.props);
  console.log('values for formik', values);
  const url = "http://localhost:5000/api/friends";
  axiosWithAuth()
    .post(url, values)
    .then(response => {
      console.log("res", response);
      formikBag.props.history.push("/friends");
    })
    .catch(e => {
      console.log(e.response.data);
    });
}
})(NewFriend)
