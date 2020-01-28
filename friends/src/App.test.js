import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Login from './components/Login';
import Friends from './components/Friends';


test('renders form in Login', () => {
  const { getByTestId } = render(<Login />)
  getByTestId('login-form')  
});

// test('friends form renders', () => {

// });