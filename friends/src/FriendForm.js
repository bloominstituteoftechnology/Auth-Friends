import React from 'react'
import { Field, reduxForm } from 'redux-form'

let FriendsForm = ({ handleSubmit }) => {

    return <form onSubmit={handleSubmit}>
        <div><label htmlFor="name">Name</label>
            <Field name="name" placeholder="Name" component="input" type="text" />
        </div>
        <div><label htmlFor="age">Age</label>
            <Field name="age" placeholder="Age" component="input" type="age" />
        </div>
        <div><label htmlFor="email">Email</label>
            <Field name="email" placeholder="Email" component="input" type="email" />
        </div>
        <button onClick={handleSubmit}>Add</button>
    </form>
}

FriendsForm = reduxForm({
    form: 'friend',
    initialValues: { name: '', age: '', email: '' }
})(FriendsForm)


export default FriendsForm;