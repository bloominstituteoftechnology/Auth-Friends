import React from 'react'
import { Field, withFormik } from 'formik'
import * as yup from 'yup'
import { connect } from 'react-redux'

import { addNewFriend, editFriend } from '../actions'
import { SemanticFormikField } from '../utils/SemanticFormikField'

import { Form, Button } from 'semantic-ui-react'

function JSXForm({ values, handleSubmit }) {

    return (
        <Form onSubmit={handleSubmit}>
            <Field type='hidden' name='id' disabled/>

            <Field type='text' name='name' label='Name:' placeholder='John Doe' component={SemanticFormikField}/>

            <Field type='text' name='age' label='Age:' placeholder='21' component={SemanticFormikField}/>

            <Field type='text' name='email' label='Email:' placeholder='example@gmail.com' component={SemanticFormikField}/>
            
            <Button type='submit'>{values.id === '' ? 'Add' : 'Update'}</Button>
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
            .positive('*Age must be positive')
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