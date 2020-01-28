import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Login from './components/Login';

test('renders App', () => {
  const { getByText } = render(<App />);
});

test('renders form in Login', () => {
  const { getByTestId } = render(<Login />)
  getByTestId('login-form')  
});
