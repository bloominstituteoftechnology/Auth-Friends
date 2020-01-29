import React, { useState } from 'react';
import axios from 'axios'
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const Div = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
width:40%;
margin:1% auto;
`;
const Title = styled.h1`
text-align:center
`;

const FriendsList = () => {
    const [state, setState] = useState({
        id:Date.now(),
        name: '',
        age: '',
        email: '',
    })

    const handlechanges = e => {
        setState({...state, [e.target.name]: e.target.value})
    }

    const addAFriend = e => {
        e.preventDefault();
        console.log('this is state',state)
        axiosWithAuth().post('/api/friends', state)
        .then(res => 
            console.log(res)
        )
        .catch(err => console.log(err));
    }

    console.log(state)
    return(
        <form  noValidate autoComplete="off" onSubmit={addAFriend}>
            <Div>
               <Title>Add A Friend</Title> 
        <TextField id="standard-basic" label="Name" name='name' value={state.name} onChange={handlechanges}/>
           {/* <input
           type='text'
           name='name'
           value={state.name}
           onChange={handlechanges}
           /> */}
           <TextField id="standard-basic" label="Age" name='age' value={state.age} onChange={handlechanges}/>
           {/* <input
           type='text'
           name='age'
           value={state.age}
           onChange={handlechanges}
           /> */}
           <TextField id="standard-basic" label="Email" name='email' value={state.email} onChange={handlechanges}/>
           {/* <input
           type='text'
           name='email'
           value={state.email}
           onChange={handlechanges}
           /> */}
          <Button variant="contained" onClick={addAFriend}>Submit</Button>
           </Div>
        </form>
    )
}


export default FriendsList;