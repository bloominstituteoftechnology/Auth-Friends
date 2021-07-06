import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useState } from 'react';
import {useHistory} from 'react-router-dom';


const Login = () => {
    //Set Up State
    const initalCreds = {
            username: "",
            password: ""
    }

    const [credInput, setCredInput] = useState(initalCreds);

    //Event Handlers: 
    const handleChange = e => {
        setCredInput({
                ...credInput, 
                [e.target.name]: e.target.value
            });
    }

    const history = useHistory();

    const login = e => {
        e.preventDefault();
        axiosWithAuth().post('api/login', credInput)
            .then(res => {
                window.localStorage.setItem('token', res.data.payload);
                history.push('/protected')
            })
            .catch(err => console.log(err))
    }
   

    return (
        <div>
            <form onSubmit={login}>
                <input
                    type="text"
                    name="username"
                    value={credInput.username}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    value={credInput.password}
                    onChange={handleChange}
                />
          <button>Log in!</button>
            </form>
        </div>
    )

}

export default Login;