import React,{useState,useEffect} from 'react';
import {axiosWithAuth} from '../utility/axiosWithAuth';
import Friend from './Friend';

const Friends = () => {
    
    const [friends, setFriends] = useState()

    useEffect(()=>{
        getData()
    },[])

    const getData = () => {
        axiosWithAuth()
        .get('/friends')
        .then(res=>{
            setFriends(res.data.friends)
        })
        .catch(err=>{
            console.log('Friends Data error', err.message)
        })
    }
    return (
        <div>
            {friends.map((friend,idx)=>{
                return <Friend key={idx} friend={friend}/>
            })}
        </div>
    )
}
export default Friends;