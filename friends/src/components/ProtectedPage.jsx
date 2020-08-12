import React, { useState, useEffect } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth';
import Card from './Friends/Card';
import Add from './Friends/Add'



export default function ProtectedPage() {
    
    const [friends, setFriends] = useState([]);
    const [input, setInput] = useState([]);

    useEffect(()=>{
        axiosWithAuth().get('http://localhost:5000/api/friends', JSON.stringify(localStorage.getItem('token')))
        .then(res => {
            console.log(res.data);
            setFriends(res.data);
        })
    },[])

    //Handle Delete
    const handleDelete = (e) => {
        axiosWithAuth().delete(`http://localhost:5000/api/friends/${e.target.id}`, e.target.id).then(res => setFriends(res.data))
      }

    //Handle Change
    const handleChange = e => {
        setInput({ ...input, id: Date.now(), [e.target.name]: e.target.value })
      }

    //Handle Submit
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input);
        axiosWithAuth().put(`http://localhost:5000/api/friends/${input.id}`, input)
          .then(res => {
            setFriends(res.data);
            console.log(res.data);
          })
          .catch(err => console.log(err))
    
      }
    
    return (
        <div>

            <h1>Friends!</h1>
            <Add handleSubmit={handleSubmit} handleChange={handleChange}/>
            {
                friends.map(friend =>{
                    return(
                        <Card friend = {friend} handleDelete={handleDelete}/>
                    )
                })
            
            }

        </div>
    )
}
