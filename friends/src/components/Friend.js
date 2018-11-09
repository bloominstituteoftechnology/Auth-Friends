import React from 'react'
import { connect } from 'react-redux'

const Friend = props => {
    return (
        <div>{props.friend.name}</div>
    )
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(Friend);