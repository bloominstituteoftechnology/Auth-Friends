// display the list of friends that lives on the server
import React, { useState, useEffect} from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'
function FriendList() {
    const [friends, setFriends] = useState()

    useEffect(() => {
        getData()
     }, [])

    const getData = () =>{
        axiosWithAuth()
        .get('/api/friends')
            .then((resp) =>{
                console.log(resp)
                setFriends(resp.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    //show loading friends on 1 render, and on second render display the friends on a list
    if (friends === undefined) {
        return <h1>Loading Friends</h1>
    } else {
        return (
            <section>
                <ol>
                    {
                        friends.map(aFriend => {
                            return (
                                <li>
                                    <h2>{aFriend.name}</h2>
                                    <p>Age: {aFriend.age}</p>
                                    <p>email: {aFriend.email}</p>
                                </li>
                            )
                        })
                    }
                </ol>
            </section>
        )
    }

}

export default FriendList
