import React, { useState, useEffect } from 'react';
import api from '../utils/api';


function Account() {
    const [user, setUser] = useState({
        id: [],
        name: '',
        age: '',
        email: '',
    })

    // useEffect(() => {
    //     api().get('/me')
    //     .then(result => {
    //         setUser({
    //             name: result.data.name,
    //             age: result.data.age,
    //             email: result.data.email,
    //         })
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })
    // }, [])

    return (
        <>
        <h1>My Account</h1>
        <div className="account-row">Id {user.id}</div>
        <div className="account-row">Name {user.name}</div>
        <div className="account-row">Age {user.age}</div>
        <div className="account-row">Email {user.email}</div>
        </>
    )
}

export default Account
