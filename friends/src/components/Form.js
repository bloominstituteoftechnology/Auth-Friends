import React from 'react';
import styled from "styled-components";


const StyledForm = styled.form`
  background: #fee800a6;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 10px;
  border-radius: 5px;
  margin: 15px;
  box-sizing: border-box;
  box-shadow: 1px 1px 15px lightblue, -1px -1px 15px lightblue;
  input {
    background: lightblue;
    border: none;
    margin:  5px;
    border-radius: 10px;
    padding: 2px 10px;
    font-weight: bold;
    color: darkblue;
    text-align:center;
    &:focus{
        text-align:left;
    }
  }
  button {
    border-radius: 10px;
    margin: 10px 5px 0;
    padding: 2px 45px;
    background: #fee800;
    box-shadow: 1px 1px 15px lightblue, -1px -1px 15px lightblue;
    border-style: none;
    border: 1px solid lightblue;
    cursor: pointer;
    font-weight: bold;
    color: darkblue; 
  }
`;

const Form = props =>{

return (
    <StyledForm onSubmit={props.submitHandler}>
      <input
        type="text"
        name='name'
        value={props.state.name}
        onChange={props.changeHandler}
        placeholder='name'
      />
      <input
        type="email"
        name='email'
        value={props.state.email}
        onChange={props.changeHandler}
        placeholder='bestie@friend.com'
      />
      <input
        type="number"
        name='age'
        value={props.state.age}
        onChange={props.changeHandler}
        placeholder='age'
      />
      <button type='submit' children={props.card ? 'Update Friend': 'Add Friend'}>
    
      </button>
    </StyledForm>
  );
}

export default Form