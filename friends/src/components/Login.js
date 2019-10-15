import React from 'react'
import { withFormik, Form, Field } from 'formik'
import axios from 'axios'


const Login = ( {touched, errors} ) => {
return(
 <Form className="form">
   <div className="form-group">
     <label className="label">Email</label>
     <Field className="input" name="username" type="username" />
   </div>
   <p>{touched.username && errors.username}</p>
   <div className="form-group">
     <label className="label">Password</label>
     <Field className="input" name="password" type="password" />
   </div>
   <p>{touched.password && errors.password}</p>
   <button type="submit" className="btn">
     Submit &rarr;
   </button>
 </Form>
  )
}
export default withFormik({
  mapPropsToValues() {
    return {
      username: "",
      password: ""
    };
  },
  handleSubmit(values, formikBag) {
  // console.log(formikBag.props);
  // console.log('values',values);
  const url = "http://localhost:5000/api/login";
  axios
    .post(url, values)
    .then(response => {
      console.log("token", response.data.payload);
      localStorage.setItem("token", response.data.payload);
      formikBag.props.history.push("/friends");
    })
    .catch(e => {
      console.log(e.response.data);
    });
}
})(Login)
