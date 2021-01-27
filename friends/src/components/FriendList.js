import React from 'react'
import CreateUser from "./CreateUser"
import DeleteUser from "./DeleteUser"
import UpdateUser from "../components/UpdateUser.1"
import Friends from './friends'

export default function FriendList() {

   
    return (
        <>
        <CreateUser/>
        <DeleteUser/>
        <UpdateUser/>
        <Friends/>
        </>
    )
}
