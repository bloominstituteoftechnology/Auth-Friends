import React from 'react'

import {connect} from 'react-redux'
import {fetchFriends, deleteFriend} from '../actions'
import FriendsList from '../components/FriendsList'
import ReactLoading from 'react-loading'

class FriendsListContainer extends React.Component {



componentDidMount () {
    this.props.fetchFriends();
}


deleteFriend = (event, id) => {
    event.preventDefault()
    console.log('ID: ', id)
    this.props.deleteFriend(id);
}



render() {

    return (
    <div>
        {this.props.isFetching ? <ReactLoading type="cylon" color="#000" height="200px" width="200px"/> : <FriendsList friends={this.props.friends} deleteFriend={this.deleteFriend}/>}
    </div>
    )
}

}


const mapStateToProps = ({friendsReducer}) => {
   
    return {
        friends: friendsReducer.friends,
        error: friendsReducer.error,
        isFetching: friendsReducer.isFetching
    }
}

export default connect(mapStateToProps, {fetchFriends, deleteFriend})(FriendsListContainer)