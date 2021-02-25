import React from 'react';
import useForm from '../hooks/useForm'
import axios from 'axios';

const AddFriendForm = () => {

    const initForm = {
        name: "",
        email: "",
        age: ""
    }

    const submitFunc = (props) => {
        const token = localStorage.getItem('token');
        axios.post('http://localhost:5000/api/friends', {
            
            headers: {
                Authorization: token
            },
            body: form
        })
        .then(res => {
            props.setFriends(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    }


    const [form, handleChange, handleSubmit] = useForm(initForm, submitFunc);
    return(
        <div>
            <h3>Add Friend Form</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input value={form.name} onChange={handleChange} id='name' name='name' type="text"/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input value={form.email} onChange={handleChange} id='email' name='email' type="email"/>
                </div>
                <div>
                    <label htmlFor="age">Age:</label>
                    <input value={form.age} onChange={handleChange} id='age' name='age' type="text"/>
                </div>
            </form>
        </div>
    )
}

export default AddFriendForm;