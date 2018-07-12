import React from 'react';
import styled from 'styled-components';

const FlexDiv = styled.div `
position:absolute;
top:60px;
left:160px;
width: 220px;
display: flex;
justify-content: flex-start;
align-items:center;
text-align: center;
background-color: none;
color: black;
list-style: none;
`
const Input = styled.input`
width: 215px;
padding: 0;
margin: 0;
`
const AddFriend = styled.p`
margin: 10px;
color: white;
font-size: 20px;
font-weight: bold;
`


const FriendForm = (props) => {
  return (
    <FlexDiv><AddFriend>Add a Friend</AddFriend>
      <form onSubmit={props.formSubmit}>
      
          <Input onChange = {props.onChange} value={props.nameValue} type="text" name='first_name' placeholder='name'/>
              {/* <input onChange={props.onChange} type="number" name='age' placeholder='age'/> */}
              <input onChange={props.onChange} type="text" value = {props.emailValue} name='email' placeholder='email'/>
          <button>Submit</button>
          </form>
    </FlexDiv>

  );
};

export default FriendForm