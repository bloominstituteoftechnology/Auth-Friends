import React from 'react'
import { Form, Field, withFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'

function JSXForm({ values, errors, touched }) {

    return (
        <Form>
            <Field type='text' name='username' placeholder='Username'/>
            {touched.username && errors.username && <p>{errors.username}</p>}

            <Field type='password' name='password' placeholder='Password'/>
            {touched.password && errors.password && <p className='err'>{errors.password}</p>}

            <button type='submit'>Login</button>
        </Form>
    )
}

const LoginForm = withFormik({
    mapPropsToValues({ username, password }) {
        return {
            username: username || '',
            password: password || ''
        }
    },

    validationSchema: yup.object().shape({
        username: yup
            .string()
            .required('*Username is required'),
        password: yup
            .string()
            .required('*Password is required'),
    }),

    handleSubmit(values, { props, resetForm, setErrors, setSubmitting }) {
        if (values.username !== 'admin') setErrors({username: '*Incorrect username'})
        else if (values.password !== 'password') setErrors({password: '*Incorrect password'})
        else {
            axios
            .post('http://localhost:5000/api/login', values)
            .then(res => {
                localStorage.setItem('token', res.data.payload)
                resetForm()
                setSubmitting(false)
                props.history.push('/')
            })
            .catch(err => {
                setSubmitting(false)
            })
        }
    }
})(JSXForm)

export default LoginForm