import React, { useState } from 'react';
import {axiosWithAuth} from '../Utility/axiosWithAuth';
const initialFormValues = {
    id: Date.now(),
    name: '',
    age: '', 
    email: '',
}
const AddAFriend = (props) => {
   const [values, setValues] = useState(initialFormValues)
    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('http://localhost:5000/api/friends', values)
        .then(res=>{
            // props.setFriends(res.data)
            window.alert('friend added')
        })
        .catch(err=>{
            console.log('axios add friend err', err)
        })
    }
    return (
        <div>
            <h2>Add a friend</h2>
            <form onSubmit={handleSubmit}>
                <label>Name
                    <input 
                    type='text'
                    onChange={handleChange}
                    name='name'
                    value={values.name}

                    />
                </label>
                <label>Age
                    <input 
                    type='text'
                    onChange={handleChange}
                    name='age'
                    value={values.age}

                    />
                </label>

                <label>Email
                    <input 
                    type='text'
                    onChange={handleChange}
                    name='email'
                    value={values.email}

                    />
                </label>
                <button>Submit Friend</button>
            </form>
        </div>
    )
}
export default AddAFriend;