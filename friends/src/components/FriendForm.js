import React from 'react'
import { Form, Field, withFormik } from 'formik'
import * as yup from 'yup'
import { connect } from 'react-redux'

import { addNewFriend, editFriend } from '../actions'

function JSXForm({values, errors, touched }) {

    return (
        <Form>
            <Field type='hidden' name='id' disabled/>

            <Field type='text' name='name' placeholder='Name'/>
            {touched.name && errors.name && <p>{errors.name}</p>}

            <Field type='text' name='age' placeholder='Age'/>
            {touched.age && errors.age && <p>{errors.age}</p>}

            <Field type='text' name='email' placeholder='email'/>
            {touched.email && errors.email && <p>{errors.email}</p>}
            
            {values.id === '' ? <button type='submit'>Add</button> : <button type='submit'>Update</button>}
        </Form>
    )
}

const LoginForm = withFormik({
    mapPropsToValues({ id, name, age, email, updateFriend }) {
        const idUpdate = updateFriend.id !== undefined ? updateFriend.id : ''
        const nameUpdate = updateFriend.name !== undefined ? updateFriend.name : ''
        const ageUpdate = updateFriend.age !== undefined ? updateFriend.age : ''
        const emailUpdate = updateFriend.email !== undefined ? updateFriend.email : ''

        return {
            id: id || idUpdate,
            name: name || nameUpdate,
            age: age || ageUpdate,
            email: email || emailUpdate
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
        if (props.updateFriend.id === undefined) {
            delete values.id // delete id to have backend assign one
            props.addNewFriend(values)
        } else props.editFriend(values)
        resetForm()
        setSubmitting(false)
        props.history.push('/')
    }
})(JSXForm)

const mapPropsToState = state => {
    return {
        updateFriend: state.updateFriend
    }
}

export default connect(mapPropsToState, { addNewFriend, editFriend })(LoginForm)