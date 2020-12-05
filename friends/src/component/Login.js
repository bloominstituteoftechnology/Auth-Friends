import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Input,Button,Form,Label} from 'reactstrap';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import Spinner from 'react-bootstrap/Spinner';

function Login(){
    const history =useHistory();
    const [loginData,setLoginData]=useState({
        username:'',
        password:''
    });
    const [loading,setLoading]=useState(false);

    const handleChanges=(e)=>{
        console.log('login in change=',loginData);
       setLoginData({
           ...loginData,
           [e.target.name] : e.target.value
       })
      
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('after submit',loginData)
        setLoading(true);
        //make a Post request and send the loginData object to the api
        postLoginData();
    }

    const postLoginData=()=>{
        //note axiosWith Auth is a named function that checks the token for making axios call.
        axiosWithAuth()
        .post('/api/login',loginData)
        .then(res=>{
            console.log('res login=',res)
            setLoading(false);
            //res.data.payload has the token in the res header
            console.log('token',res.data.payload);
            //store as localstorage token
            window.localStorage.setItem('token',res.data.payload);
            //navigate to the friends page
            history.push('/friends');
        })
        .catch(err=> console.log('err in login',err))
    }
    loading && <Spinner color="primary" />
    return(
        
        <div >
            <Form className="login"
            onSubmit={handleSubmit}>
               <h4>Please Login</h4>
               <Label htmlFor="username">Username
               <Input 
               id="username"
               name="username"
               value= {loginData.username}
               placeholder="Enter Username"
               onChange={handleChanges}
               /></Label>
              
               <Label htmlFor="password">Password
               <Input
               id="password"
               type="password"
               name="password"
               value={loginData.password}
               placeholder="password please"
               onChange={handleChanges}/></Label> 
               <Button color="primary">Submit!</Button> 
            </Form>
        </div>
    )
}
export default Login;