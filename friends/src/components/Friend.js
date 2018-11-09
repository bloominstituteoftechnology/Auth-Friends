import React from 'react'


const Friend = props => {
    const {friend} = props

    return (
        <div>
           <h2>{friend.name}</h2>
        </div>
    )
}


export default Friend