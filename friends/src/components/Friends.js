import React from 'react'
import { connect } from 'react-redux'
import { getFriends } from '../actions'

class FriendsListView extends React.Component {
    
    componentDidCatch() {
        this.props.getFriends()
    }

    render() {
        if(this.props.fetchingFriends) {
            return(
                <h3>...loading forever</h3>
            )
        }
    }
}

function mstp(state) {
    return{
        fetchingFriends: state.reducer.fetchingFriends
    }
}

export default connect(mstp, {getFriends})(FriendsListView)