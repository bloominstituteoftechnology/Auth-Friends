import React,{ useState } from 'react';

import {  axiosAuth } from "../axios/axios";





export default function Friends() {
    const initialState = {
        
        friends:[]
    }
  
 const [friends, setFriends] = useState(initialState)
    
    
    
    const getData =  () => {
        axiosAuth()
          .get('/friends')
          .then(res=> {
              console.log(res)
            setFriends({
            friends: res.data
            })
          })
          .catch(err=>{
            console.log(err.response.data.error);
          })
        } 

             getData()

        return (
            
         { friends.map(friend =>(
             
            <div>
                <p>key={friend.id}</p>
                <p>{friend.name}</p>
                <p>{friend.age}</p>
                <p>{friend.email}</p>
            </div> 
            
             
           
        ))}

    
        )
    }






   



 
