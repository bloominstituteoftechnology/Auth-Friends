import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

const LogInForm = props => {
  // const [username, setUserName] = useState('');
  // const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  console.log('THISISPROPS', props);

  const [userInformation, setUserInformation] = useState({
    username: '',
    password: ''
  });
  const isLoading = useSelector(state => state.root.isLoading);
  const handleChange = event => {
    return setUserInformation({
      ...userInformation,
      [event.target.name]: event.target.value
    });
  };

  console.log('LOADING', isLoading);
  const { username, password } = userInformation;

  const handleSubmit = event => {
    dispatch({ type: 'SET_IS_LOADING', payload: true });
    event.preventDefault();
    axios
      .post('http://localhost:4000/api/login', { username, password })
      .then(response => {
        console.log(response);
        localStorage.setItem('token', response.data.payload);
        dispatch({
          type: 'SET_AUTH_TOKEN',
          payload: response.data.payload
        });
        dispatch({ type: 'SET_LOGGED_IN_USER', payload: true });
        dispatch({ type: 'SET_IS_LOADING', payload: false });
        props.history.push('/friends');
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: 'SET_IS_LOADING', payload: false });
      });
  };
  return (
    <div>
      <h1>Our Login Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          label='username'
          type='text'
          name='username'
          placeholder='enter name'
        />
        <br />
        <input
          onChange={handleChange}
          label='password'
          type='password'
          name='password'
          placeholder='enter password'
        />
        <br />
        <button>{isLoading ? 'Sending' : 'Send'}</button>
      </form>
    </div>
  );
};

export default LogInForm;
