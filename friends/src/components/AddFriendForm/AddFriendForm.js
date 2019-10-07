import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function FriendForm({ errors, touched }) {
    return (
        <Form>/*name, age, email*/
            <div>
                {touched.name && errors.name && <p>{errors.name}</p>}
                <Field className='field' type='text' name='name' placeholder='Name'/>
            </div>
            <div>
                {touched.age && errors.age && <p>{errors.age}</p>}
                <Field className='field' type='number' name='age' placeholder='Age'/>
            </div>
            <div>
                {touched.email && errors.email && <p>{errors.email}</p>}
                <Field className='field' type='email' name='email' placeholder='Email'/>
            </div>
        </Form>
    )
}