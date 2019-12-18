import React,{useState, useEffect} from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'
function Login (){
    const [form,setForm] = useState({
        username:'',
        password:''
    })
    console.log(form)
    return(
        <form onSubmit={(e)=>{
            e.preventDefault();
            axiosWithAuth().post('/login',form)
            .then(res=>{console.log(res)})
            .catch(err=>{console.log(err)})
        }}>
            <input type='text' name='username'value={form.username} placeholder='Username' onChange={(e)=>{
                setForm({
                    ...form,
            [e.target.name]:e.target.value
        })
            }} />
            <input type='password' name='password' value={form.password} placeholder='Password' onChange={(e)=>{
                setForm({
                    ...form,
            [e.target.name]:e.target.value
        })
            }} />
            <button type='submit'> Submit.</button>
        </form>
    )
}
export default Login