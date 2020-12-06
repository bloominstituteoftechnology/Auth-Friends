import React, { useState } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'

function Friends() {
const [state, setState] = useState({
    friends: []
})

const componentDidMount = () => {
    getData()
}


const getData = () => {
    axiosWithAuth().get("/data")
    .then(res => {
        console.log("working" , res)
        setState({
            friends: res.data
        })
    })
}

    return (
        <div>
            Page is rendering
        
        </div>
    )
}

export default Friends
