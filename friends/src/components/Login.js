//import software
import React, {useState} from 'react'; 
import {useHistory} from 'react-router-dom';
import {axiosWithAuth} from "../utils/axiosWithAuth";

function LoginForm(){
    const history = useHistory();

    const [credentials, setFormCredentials] = useState({
        id: '', 
        username: '', 
        password: ''
    });
    function handleChange(e){
        e.persist();
        setFormCredentials({...credentials, [e.target.name]: e.target.value})
    }
    
    function handleSubmit(e){
        e.preventDefault();
        return axiosWithAuth()
        .post('api/login', credentials)
        .then(res => {
            localStorage.setItem('token', JSON.stringify(res.data.payload));
            history.push('/protected');
        })
        .catch(err => console.log({err: err.message}))
    }

    return (
        <form onSubmit={handleSubmit} className="form">
        <label htmlFor="Username">
          Username
          <input name="username" value={credentials.name} onChange={handleChange} />
        </label>
        <br />
        <br />
        <label>
          Password
          <input name="password" value={credentials.password} onChange={handleChange} />
        </label>
        <br />
        <br />
        <button> Log In</button>
      </form>
    )
}

export default LoginForm;