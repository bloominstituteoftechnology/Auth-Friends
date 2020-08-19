import React, {useState} from 'react'
import {axiosWithAuth} from '../Utils/axiosWithAuth'
import {useHistory} from 'react-router-dom';

const initialFormValues = {
    id: '',
    name: '',
    age: '',
    email: ''
}

const NewFriendForm = props =>{
    const [formValues, setValues] = useState(initialFormValues);
    const history = useHistory();
   

    const handleChange = e =>{
        const {name, value} = e.target
        setValues({...formValues, [name]: value})
    }

    const postFriend = e =>{
        e.preventDefault()
        axiosWithAuth()
            .post('/api/friends', formValues)
            .then(res =>{
                setValues(initialFormValues)
            })
        history.push('/friends')
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
                        value={formValues.email} />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}
export default NewFriendForm