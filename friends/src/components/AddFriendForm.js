import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

const initalValues ={
    // id: ,
    name: '',
    age: '',
    email: '',
}

 export const AddFriendForm = () =>{
     const [formValues, setFormValues] = useState(initalValues);
     const history = useHistory();
    

    const handleChange = (evt) =>{
        setFormValues({
            ...formValues,
            [evt.target.name]: evt.target.value,
        });
    }

    const handleSubmit = (evt) =>{
        evt.preventDefault();
        axiosWithAuth()
        .post('http://localhost:5000/api/friends', formValues)
        .then((res) =>{
            setFormValues({
                // id: ,
                name: '',
                age: '',
                email: '',
            });
            history.push('/friendslist')
        })
        .catch((err) =>{
            console.log(err)
        })
    };

        return(
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Name:
                        <input
                            type='text'
                            placeholeder='name'
                            name='name'
                            value={formValues.name}
                            onChange={handleChange}
                        />
                    </label>
                    
                    <label>Age:
                        <input
                            type='text'
                            placeholeder='age'
                            name='age'
                            value={formValues.age}
                            onChange={handleChange}
                        />
                    </label>
                    
                    <label>Email:
                        <input
                            type='text'
                            placeholeder='email'
                            name='email'
                            value={formValues.email}
                            onChange={handleChange}
                        />
                    </label>
                    <button>Add Friend</button>
                </form>
            </div>
        )
};