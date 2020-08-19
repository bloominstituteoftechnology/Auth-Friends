import React, {useState} from 'react'
import {axiosWithAuth} from '../Utils/axiosWithAuth'

const initialFormValues = {
    id: '',
    name: '',
    age: '',
    email: ''
}

const NewFriendForm = props =>{
    const [formValues, setValues] = useState(initialFormValues);

   

    const handleChange = e =>{
        const {name, value} = e.target
        setValues({...formValues, [name]: value})
    }

    const postFriend = () =>{
        console.log('post')
    }

    return (   
        <div className='new-friend'>
            <p>test</p>
            <form onSubmit={postFriend}>
                <label>Name:
                    <input
                        name='name'
                        type='text'
                        onChange={handleChange}
                        value={formValues.name}
                    />
                </label>
                <label>Age:
                    <input
                        name='age'
                        type='text'
                        onChange={handleChange}
                        value={formValues.age}
                    />
                </label>
                <label>email:
                    <input
                        name='email'
                        type='email'
                        onChange={handleChange}
                        value={formValues.age} />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}
export default NewFriendForm