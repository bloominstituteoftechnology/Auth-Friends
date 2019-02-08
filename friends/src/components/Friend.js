import React from 'react'
import { connect } from 'react-redux'
import { deleteFriends } from '../actions'

const Friend = props => {

    const handleDelete = ()=> {
        props.deleteFriends(props.id)
    }
   
    return (
        <div>
            <p>
                {props.friend.name} {props.friend.age} {props.friend.email}
            </p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default connect(null, { deleteFriends })(Friend)
