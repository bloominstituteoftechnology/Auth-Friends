import React, { useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import Loader from "react-loader-spinner";

const Div = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
margin:0 auto;
width:30%
`;

const Login = () => {
    
    const [state, setState] = useState({
        username:'',
        password:'',
    })
    const [isLoading, setIsLoading] = useState(false);

    const handlechanges = e => {
        setState({...state, [e.target.name]: e.target.value})
    }
    
    const login = e => {
        e.preventDefault()
        setIsLoading(true);
    // make a POST request to the server
    // the server will "authenticate" the user based on their credentials
    // If they can be authenticated the server will return a token
        axios.post('http://localhost:5000/api/login', state)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            setIsLoading(false);
        })
        .catch(err => console.log(err));
    }

    return (
        
        <form noValidate autoComplete="on" >
            {isLoading ? (
        <Loader
          type="ThreeDots"
          color="light-blue"
          height={30}
          width={100}
          timeout={3000} />
          ) : (
            <>
            </>
          )}
            <Div>
            <TextField id="standard-basic" label="UserName" name='username' value={state.username} onChange={handlechanges}/>
            <TextField id="" label="Password" name='password' value={state.password} onChange={handlechanges}/>
            <Button variant="contained" onClick={login}>Submit</Button>
          </Div>
        </form>   
    )
}

export default Login;