import React from 'react'
import {connect} from 'react-redux'
import { deleteFriends } from "../store/actions/index"

const FriendsList = (props) => {
    const {id, name, age, email} = props.friend

    const deleteFriends = () => {
        props.deleteFriends(id)
    }

    return(
        <div>
            <h1>{name}</h1>
            <p>{age}</p>
            <p>{email}</p>
            <button onClick={() => deleteFriends()}> DEL </button>
        </div>
    )
}

export default connect(null, {deleteFriends})(FriendsList)