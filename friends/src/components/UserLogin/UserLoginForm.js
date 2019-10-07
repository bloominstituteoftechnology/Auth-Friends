import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function UserLoginForm({ errors, touched, values }) {

    return (
        <Form>
            <div>
                {touched.userName && errors.userName && <p>{errors.userName}</p>}
                <Field className='field' type='text' name='userName' placeholder='User Name'/>
            </div>
            <div>
                {touched.userPassword && errors.userPassword && <p>{errors.userPassword}</p>}
                <Field className='field' type='password' name='userPassword' placeholder='Password'/>
            </div>
            <button type='submit'>Submit</button>
        </Form>
    )
}

const FormikLoginForm = withFormik({
    mapPropsToValues({ userName, userPassword, setToken }) {
        return {
            userName: userName || "",
            userPassword: userPassword || "",
            setToken: setToken
        };
    },

    validationSchema: Yup.object().shape({
        userName: Yup.string()
                .required('User Name is Required'),
        userPassword: Yup.string()
                .required('Password is Required')
    }),

    handleSubmit(values, { props }) {
        console.log(props)
        axios.post('http://localhost:5000/api/login', {
            username: values.userName,
            password: values.userPassword
        })
        .then(res => {
            props.setToken(res.data.payload);
            localStorage.setItem('token', res.data.payload);
        })
    }
})(UserLoginForm)

export default FormikLoginForm;