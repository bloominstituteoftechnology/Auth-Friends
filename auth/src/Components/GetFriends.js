import React, {useState} from 'react';
import {axiosWithAuth} from '../Utility/axiosWithAuth';
import Friend from './Friend';
import AddAFriend from './AddAFriend';
const GetFriends = () => {
    const [friends, setFriends] = useState([])
    
    const grabFriends = () => {
        axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(res=>{
            console.log(res.data)
            setFriends(res.data)
        })
        .catch(err=>{
            console.log('Axios friends error', err.response)
        })
    }
 
  
    
    return (
        <div>
            <button onClick={grabFriends}>Get Friends</button>
            {friends.map((item,idx)=>{
                return <Friend item={item} key={idx} friends={friends} setFriends={setFriends}/>
            })}
            <AddAFriend friends={friends} setFriends={setFriends}/>
        </div>
    )
}
export default GetFriends;