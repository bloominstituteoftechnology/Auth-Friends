import React, {useState} from 'react';
import axios from 'axios';
import useForm from '../hooks/useForm'

const initForm = {
    username: "Lambda School",
    password: "i<3Lambd4",
}

const Login = (props) => {
    const [isLoading, setLoading] = useState(false);
    const submitFunc = () => {
        setLoading(true);
        axios.post('http://localhost:5000/api/login', form)
        .then(res => {
            //console.log(res);
            localStorage.setItem('token', res.data.payload)
            props.history.push('/friends');
        })
        .catch(err => {
            setLoading(false);
            console.log(err);
        })
    }

    const [form, handleChange, handleSubmit] = useForm(initForm, submitFunc);

    
    //console.log(form)
    return(
        <div>
            <h3>Login</h3>
            
            <form onSubmit={handleSubmit} >
                <div>
                    <label htmlFor="username">Username</label>
                    <input id='username' value={form.username} onChange={handleChange} name='username'type="text" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input id='password' value={form.password} onChange={handleChange}name='password'type="text" />
                </div>

                <button>Login</button>
                
            </form>
            {
                isLoading && <h3>Loading Stuff</h3>
            }
        </div>
    )
}

export default Login;