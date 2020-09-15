import React, {useState} from 'react';
import {useHistory, Link} from 'react-router-dom';
import AxiosWithAuth from '../AxiosWithAuth';

const initialFormValues = {
    name: '',
    age: '',
    email: '',
}

export default function AddFriend(props) {
    const setFriends = {props};

    let [formValues, setFormValues] = useState(initialFormValues);
    const history = useHistory();

    const onChange = (event) => {
        const {name, value} = event.target;
        setFormValues({...formValues, [name]: value});
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addNewFriend(formValues);
        history.push('/friends');
    }

    const addNewFriend = (friendObj) => {
        AxiosWithAuth().post('/api/friends', friendObj)
            .then(response => {
                setFriends(response.data);   
                
            })
            .catch(err => console.log(err));
    }

    return (
        <form onSubmit={onSubmit}>
            <input 
                name='name'
                type='input'
                value={formValues.name}
                placeholder='enter name...'
                onChange={onChange}
            />
            <input 
                name='age'
                type='input'
                value={formValues.age}
                placeholder='enter age...'
                onChange={onChange}
            />
             <input 
                name='email'
                type='email'
                value={formValues.email}
                placeholder='enter email...'
                onChange={onChange}
            />
            <button>submit friend</button>
            <Link to="/friends" >back to friends</Link>
        </form>
    )
}