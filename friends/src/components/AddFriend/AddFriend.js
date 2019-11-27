import React from 'react';
import { withFormik, Field, Form } from 'formik';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import './index.css'

const AddFriend = props => {
    return (
        <Form
        className='form'
        >
            
            <Field
                type="text"
                name="name"
                placeholder="Name"
                className="field-name"
            />

            
            <Field
                type="number"
                name="age"
                placeholder="Age"
                className="field-name"
            />

           
            <Field
                type="email"
                name="email"
                placeholder="E-mail"
                className="field-name"
            />
            <button className="login-btn" type="submit">Submit Friend</button>
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
