import React from 'react';
import { Formik, withFormik, Field, Form } from 'formik';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const AddFriend = props => {
    return (
        <Form>
            Name:
            <Field
                type="text"
                name="name"
                placeholder="Name"
            />

            Age:
            <Field
                type="number"
                name="age"
                placeholder="Age"
            />

            Email:
            <Field
                type="email"
                name="email"
                placeholder="E-mail"
            />
            <button className="login-btn">Submit Friend</button>
        </Form>
    )
}

// Create a higher-order React component class that passes props 
// and form handlers (the "FormikBag") into your component derived from supplied options.

export default withFormik({
    mapPropsToValues: () => ({ name: '', age: '', email: '' }),
    handleSubmit(values, { resetForm }) {
        axiosWithAuth().post('/friends', values)
        .then(res => console.log(res))
        .catch(err => console.log(err))
        resetForm();
    }
})(AddFriend)
