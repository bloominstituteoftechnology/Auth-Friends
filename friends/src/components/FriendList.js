import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from './../utils/axiosWithAuth';
import Friends from './Friends';
import NewForm from './NewForm';

export default function FriendList(props) {

    const [friends, setFriends] = useState([])


    const getData = () =>{
        axiosWithAuth().get('/friends')
        .then(res => {
            setFriends(res.data)
             console.log(res.data)
            })
        .catch(err => console.log(err))
    }

    

    useEffect(()=>{
       getData()
    },[]);
    

    return (
        <div>
         <h3>Friends</h3>
         <NewForm/>
         <div>
         {
             friends.map(each => (
                 <div>
                <Friends name={each.name} age={each.age} email={each.email} />
                </div>
             ))
         }
         
         </div>
        </div>
    )
}

