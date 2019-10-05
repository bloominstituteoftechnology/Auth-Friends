// import React from 'react';
// // import Friend from './Friend';
// import { axiosWithAuth } from '../utils/axiosWithAuth';

// class FriendList extends React.Component {
//     state = {
//         friends: []
//     }

//     componentDidMount() {
//         this.getData();
//     }

//     getData = () => {
//         axiosWithAuth()
//         .get('http://localhost:5000/api/friends')
//         .then(res => {
//             console.log(res.data)
//             this.setState({
//                 friends: res.data
//             })
//         })
//         .catch(err => console.log(err))
//     }



//     render() {
//         console.log(friends)
//         return(
//             <div>
                
//                 <h1>Your Friend List</h1>
//                 {/* <h2>{friends.map(friend => 
//                     return(
//                         Name: {props.friend.name}
//                     )
//                 )}</h2> */}
//             </div>
//         )
//     }

// }

// export default FriendList;


import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Friends = () => {

    const [friends, setFriends] = useState({friends: []});
    // const [friends, setFriends] = useState([]);
    const [newFriend, setNewFriend ] = useState({id: "", name: "", age: "", email: ""})

    useEffect(() => {
        getFriends();
    }, [])


    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
        .post("/friends", newFriend)
            .then(res => {
                console.log(res)
                console.log(res.data)
                console.log('New friend added!')

            })
            .catch(err => {
                console.log(err)
            })
            window.location.reload()

    }

    const getFriends = () => {
        axiosWithAuth()
        .get("/friends")
            .then(res => setFriends({friends: res.data}))
            .catch(err => console.log(err));

    }

    const handleChange = e => {
        setNewFriend({...newFriend, [e.target.name]: e.target.value});

    }

    return (
        <div>
        <h3>Your Friends</h3>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="name" 
                placeholder="name" 
                value={newFriend.name} 
                onChange={handleChange}/>

            <input 
                type="text" 
                name="age" 
                placeholder="age" 
                value={newFriend.age} 
                onChange={handleChange}/>

            <input 
                type="text" 
                name="email" 
                placeholder="email" 
                value={newFriend.email} 
                onChange={handleChange}/>
            <button>Add New Friend!</button>
        </form>

        {friends.friends.map(friend => {
            return(
                <div>
                    <h1 key={friend.id}>{friend.name}</h1>
                <h3>Age:{friend.age}</h3>
                <h3>Email:{friend.email}</h3>
                </div>
        )})}  
        
        </div>
    )
}

export default Friends; 