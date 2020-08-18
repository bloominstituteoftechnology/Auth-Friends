// display the list of friends that lives on the server
import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import uuid from "uuid";

function FriendList() {
    const [friends, setFriends] = useState()
    const [newFriend, setNewFriend] = useState({
        id: uuid(),
        name: '',
        age: null,
        email: ''
    })
    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        axiosWithAuth()
            .get('/api/friends')
            .then((resp) => {
                console.log(resp)
                setFriends(resp.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        axiosWithAuth()
            .post('/api/friends', newFriend)
            .then(resp => {
                console.log(resp)
                setFriends(resp.data)
            })
            .catch(error => {
                console.log(`error in FriendList: ${error}`)
            })
    }
    const handleChange = (e) => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        })
    }
    //show loading friends on 1 render, and on second render display the friends on a list
    if (friends === undefined) {
        return <h1>Loading Friends</h1>
    } else {
        return (
            <div className="friend-list-container container">
                <h1>Friends</h1>
                <section className="add-new-friend">
                    <h2>Add new Friend</h2>
                    <form onSubmit={onSubmit}>
                        <label id='name'> Name </label>
                        <input
                            id='name'
                            placeholder='Name'
                            type="name"
                            name="name"
                            value={newFriend.name}
                            onChange={handleChange}
                        />
                        <label id='age'> Name </label>
                        <input
                            id='age'
                            placeholder='Age'
                            type="number"
                            name="age"
                            value={newFriend.age}
                            onChange={handleChange}
                        />
                        <label id='email'> Name </label>
                        <input
                            id='email'
                            placeholder='Email'
                            type="email"
                            name="email"
                            value={newFriend.email}
                            onChange={handleChange}
                        />
                        <button type="submit">Submit</button>
                    </form>
                </section>
                <section className='friendList'>
                    <ol>
                        {
                            friends.map(aFriend => {
                                return (
                                    <li>
                                        <h3>{aFriend.name}</h3>
                                        <p>Age: {aFriend.age}</p>
                                        <p>email: {aFriend.email}</p>
                                    </li>
                                )
                            })
                        }
                    </ol>
                </section>
            </div>
        )
    }

}

export default FriendList
