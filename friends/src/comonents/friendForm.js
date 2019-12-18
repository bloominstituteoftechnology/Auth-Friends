import React, {useState} from 'react';
import {axiosWithAuth} from '../utils/'
export function Form(){

    const [form,setForm]=useState({
        name:'',
        age:'',
        email:'',
    })

//   const sendSmurf = (form) => {
//         axios.post('http://localhost:3333/smurfs', form)
//         .then(res=>{
//             console.log(res)
//         })
//         .catch(err =>{console.log(err)})
//   }
    return(
        <form onSubmit={(e)=>{
            //e.preventDefault()
            axiosWithAuth().post('/friends', form)
            .then(res=>{
                console.log(res)
            })
            .catch(err =>{console.log(err)})
        }}>
            <input
            name='name'
            placeholder='Name.'
            value={form.name}
            onChange={(e)=>{
                setForm({
                    ...form,
            [e.target.name]:e.target.value
        })
            }}
            />
            <input
            name='age'
            placeholder='Age.'
            value={form.age}
            onChange={(e)=>{
                setForm({
                    ...form,
            [e.target.name]:e.target.value
        })
            }}
            />
             <input
            name='Email'
            placeholder='Email.'
            value={form.email}
            onChange={(e)=>{
                setForm({
                    ...form,
            [e.target.name]:e.target.value
        })
            }}
            />
            <button type='submit'>Add Smurf!</button>
            
        </form>
    )
}