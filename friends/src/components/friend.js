import React from 'react'
import { connect } from 'react-redux'
import { delFrin } from '../actions/actions'

const Friend = props => {
console.log (props)
    const handleDelete = ()=> {
        props.delFrin(props.id)
    }

    return (
        <div>
            <p>
                {props.friend.name} {props.friend.age} {props.friend.email}
            </p>
            <button onClick={handleDelete}>Unfriend</button>
        </div>
    )
}

export default connect(null, { delFrin })(Friend)
