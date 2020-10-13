import React, {useState} from 'react'
import { axiosWithAuth as reach } from './axiosWithAuth'


export const Form = (props) => {

    const [form, setform] = useState({
        username: '',
        password: ''
    })

    const onChange = (e) => {
    setform({...form,
        [e.target.id] : e.target.value
    })
    }

    const onClick = (e) => {
        e.preventDefault()

        reach()
        .post('login', form)
        .then((r) => {
            localStorage.setItem('token', r.data.payload)
            props.history.push('/protected')
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return (
        <form> 
        <label htmlFor="username">
        username: 
            <input name="username" id="username" value={form.username} onChange={(e)=>{onChange(e)}}/>
        </label>

        <label htmlFor="password">
        password:
            <input name="password" id="password" value={form.password} onChange={(e)=>{onChange(e)}}/>
        </label>

        <button onClick={(e)=>onClick(e)}>Submit</button>
        </form>
    )
}