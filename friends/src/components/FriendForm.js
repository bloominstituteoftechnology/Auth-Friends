import React from 'react'
import { Form, Field, withFormik } from 'formik'
import * as yup from 'yup'
import { connect } from 'react-redux'

import { addNewFriend } from '../actions'

function JSXForm({ values, errors, touched }) {

    return (
        <Form>
            <Field type='text' name='name' placeholder='Name'/>
            {touched.name && errors.name && <p>{errors.name}</p>}

            <Field type='text' name='age' placeholder='Age'/>
            {touched.age && errors.age && <p>{errors.age}</p>}

            <Field type='text' name='email' placeholder='email'/>
            {touched.email && errors.email && <p>{errors.email}</p>}

            <button type='submit'>Add</button>
        </Form>
    )
}

const LoginForm = withFormik({
    mapPropsToValues({ name, age, email }) {
        return {
            name: name || '',
            age: age || '',
            email: email || ''
        }
    },

    validationSchema: yup.object().shape({
        name: yup
            .string()
            .required('*Name is required'),
        age: yup
            .number('*Age must be in number format')
            .required('*Age is required'),
        email: yup
            .string()
            .email('*Email is not in valid format')
            .required('*Email is required'),
    }),

    handleSubmit(values, { props, resetForm, setSubmitting }) {
        props.addNewFriend(values)
        resetForm()
        setSubmitting(false)
        props.history.push('/')
    }
})(JSXForm)

export default connect(null, { addNewFriend })(LoginForm)