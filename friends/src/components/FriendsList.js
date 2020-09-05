import React, {useState, useEffect} from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

function FriendsList() {
    const [friends, setFriends ] = useState([{
        name: "",
        age: "",
        email: ""
    }])

    useEffect(()=> {
        axiosWithAuth()
        .get("/friends")
        .then((res) => {
           setFriends(res.data)
        })
        .catch((err) => {console.log("get error", err)})
    })


        return (
            <div>
                <h2>
                    Friends List
                </h2>
            </div>
        )


}

export default FriendsList