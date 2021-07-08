import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import styled from 'styled-components';

const StyledForm = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  .inputField{
      margin-top: .5rem;
  }
`

const initialState = {
    name: '',
    age: '',
    email: ''
};

const FriendForm = ({ setFriends }) => {
    const [formValue, setFormValue] = useState({ initialState });

    const handleChanges = event => {
        setFormValue({ ...formValue, [event.target.name]: event.target.value });
    };

    const handleSubmit = event => {
        event.preventDefault();

        axiosWithAuth()
            .post('/api/friends', formValue)
            .then(response => {
                setFriends(response.data);
                setFormValue(initialState);
            })
            .catch(error => console.error(error));
    };

    return(
        <StyledForm>
            <form onSubmit={handleSubmit}>
                <div className='inputField'>
                    <input
                        name='name'
                        type='text'
                        placeholder='name'
                        value={formValue.name}
                        onChange={handleChanges}
                    />
                </div>
                <div className='inputField'>
                    <input
                        name='age'
                        type='text'
                        placeholder='age'
                        value={formValue.age}
                        onChange={handleChanges}
                    />
                </div>
                <div className='inputField'>
                    <input
                        name='email'
                        type='email'
                        placeholder='email'
                        value={formValue.email}
                        onChange={handleChanges}
                    />
                </div>
                <div className='inputField'>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </StyledForm>
    );
};

export default FriendForm;