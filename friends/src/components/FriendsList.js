import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from './../utils/axiosWithAuth'
import AddFriendForm from './AddFriendForm'



const FriendsList =()=>{
    const [friends, setFriends] = useState([
        {
            id:20,
            name:'trey',
            age:30,
            email:'trey@trey.com'
        }
    ])
    console.log(friends)

    useEffect(()=>{
        getData()
    }, [])

    const getData = () =>{
        const token = JSON.parse(localStorage.getItem('token'))
        axiosWithAuth().get('/api/friends')
            .then((res)=>{
                console.log(res)
                setFriends(res.data)
            })
            .catch(err=>{console.log(err)})
    }


    return(
        <div>
            <h1>Friends List</h1>
            {
                friends.map(friend=>{
                    return <li>{friend.name}</li>
                })
            }

            <AddFriendForm />
        </div>
    )
}

export default FriendsList