import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

const initialFormValues = {
    username: '',
    password: '',
}
export default function Login(props){

    let [formValues, setFormValues] = useState(initialFormValues);
    const history = useHistory();

    const onChange = (event) => {
        const {name, value} = event.target;
        setFormValues({...formValues, [name]: value})
    }

    const onSubmit = (event) => {
        event.preventDefault();
        postLogin(formValues);
    }

    const postLogin = (creds) => {
        const {username, password} = creds;
        axios.post('http://localhost:5000/api/login', {
                username, password
        })
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.payload);
            history.push('/friends');
        })
        .catch(err => console.log(err));
    }

    return (
        <div clasName ="login-container">
            <form onSubmit={onSubmit}>
                <input
                    name='username'
                    type='text'
                    value={formValues.username}
                    onChange={onChange}
                    placeholder='enter username...'
                    />
                <input
                    name='password'
                    type='text'
                    value={formValues.password}
                    onChange={onChange}
                    placeholder='enter password...'
                />
                <button>log in</button>
            </form>
        </div>
    )
}