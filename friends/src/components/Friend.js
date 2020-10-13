import React, {useState,useEffect} from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import FriendForm from './FriendForm'
import FriendList from './FriendList'


function Friend() {
const [friends,setFriends] = useState([{
    id: "",
    name: "",
    age: "",
    email: ""
}])

useEffect(() => {
  
    axiosWithAuth()
    .get("api/friends")
    .then((res) => {
        setFriends(res.data)
        console.log("Friend API working", res)
    })
    .catch((err)=> {
        console.log("not working", err)
    })
}, [])

const newFriend = data => {
    const myFriend = {
        id: Date.now(),
        name: data.name,
        age: data.age,
        email: data.email
    }
    setFriends([...friends, myFriend])
}

return (
    <div>
        <FriendForm newFriend={newFriend} />
        <FriendList friends={friends}  />
    </div>
)

}


// class Friend extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             friends: {
//                 name: "",
//                 age:"",
//                 email: ""
//             }
//         }
//     }

//     myFriend = event => {
//         event.preventDefault();
//         const token = window.localStorage.getItem("token");
//         axiosWithAuth()
//         .get('friends')
//         .then((res) => {
//             this.setState(res.data)
//         })
//         .catch((err) => {
//             console.log("my Friend error",err)
//         })
//     }

//   newFriend = (data) => {
//         const myFriend = {
//             name: data.name,
//             age: data.age,
//             email: data.email
//         }
//         this.setState([...this.state.friends, myFriend])
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Friends</h1>
//                 <FriendForm setState={this.newFriend} />
//                 <FriendList setState={this.state.friends} />
//             </div>
//         )
//     }

// }


export default Friend