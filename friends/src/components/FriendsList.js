import React, {useState, useEffect} from 'react';
// import axios from 'axios';
import {axiosWithAuth} from './AxiosAuth';
import Friend from './Friend';

const FriendsList = (props) => {
    console.log(axiosWithAuth);

    const [friends, setFriends] = useState([]);

    useEffect(()=>{
  
        // axiosWithAuth.length
        // const token = localStorage.getItem('token')
        // console.log(token);
        // console.log(token)

        // axios
        // .get('http://localhost:5000/api/friends', {
            // headers: {

            //     'Content-Type': 'application/json',
            //     'Authorization': `${token}`,
            // }
        // })
        // .then(res=>{
        //     console.log(res.data);
        //     setFriends(res.data)
        // })
        // .catch(err=>{
        //     console.log(err);
        // })

        axiosWithAuth().get('http://localhost:5000/api/friends')
        .then(res=>{
            // console.log(res.data);
            setFriends(res.data);
        })
        .catch(err=>{
            // console.log(err);
            localStorage.setItem('token', null);
            props.history.push('/login')
        })
      
    }, []);
    return ( 
    
    <div>
        {friends.map(friend=>{
            return <Friend key={friend.id} friend={friend}/>
        })}
    </div> );
}
 
export default FriendsList;