import React, {useState} from 'react';
import Links from './Links';

const Login = (props) => {
  const [credentials, setCredentials] = useState({
        username: '',
        password: ''
  })

  const handleChange = e => {
    e.preventDefault();
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  }

  const login = e =>{
    e.preventDefault();
    setCredentials({
      ...credentials,
      username: '',
      password: ''
    });
    console.log(credentials)
  }
  
  return (
    
    <div className='login'>
      <Links/>
      <form className='form' onSubmit={login}>
          <label htmlFor='username'>Username</label>
          <input 
            type='text' 
            className='input' 
            name='username' 
            onChange={handleChange}
            value={credentials.username}
          />
          <label htmlFor='Password'>Password</label>
          <input 
            type='text' 
            className='input' 
            name='password' 
            onChange={handleChange}
            value={credentials.password}
          />
        
          <button type='submit' className='button'>Send</button>
     </form>
     </div>
    )

};

export default Login;