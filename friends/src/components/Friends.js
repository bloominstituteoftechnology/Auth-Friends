import React, { useState } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'
import AddFriend from './AddFriend'
import e from 'express'

function Friends() {
const [state, setState] = useState([])

// const componentDidMount = () => {
//     getData()
// }


const getData = (e) => {
    e.preventDefault();

    axiosWithAuth().get("/api/friends")
    .then(res => {
        console.log("working" , res)
        setState(
         res.data
        )
    })
    .catch(err => err.response, 'Error')
}

    return (
        <div>
            Page is rendering
        
        </div>
    )
}

export default Friends
