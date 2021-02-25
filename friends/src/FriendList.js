import React from 'react'
import CreateUser from "./CreateUser"
import DeleteUser from "./DeleteUser"
import UpdateUser from "./updateuser"
import Friend from './Friends'

export default function FriendList() {

   
    return (
        <>
        <CreateUser/>
        <DeleteUser/>
        <UpdateUser/>
        <Friend/>
        </>
    )
}