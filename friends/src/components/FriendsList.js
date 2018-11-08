import React from 'react';
import {connect} from 'react-redux';

import {fetchFriends} from '../actions/actions';
import FriendCard from './FriendCard';

class FriendsList extends React.Component{

    componentDidMount(){
        this.props.fetchFriends();
    }

    render(){
        const {friends, fetching} = this.props
        return(
            <div>
                {
                    fetching ?
                    <div>Loading Friend Data...</div> :
                    <ul>
                        {friends.map(friend=><FriendCard key={friend.id} friend={friend}/>)}
                    </ul>
                }
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        friends: state.friends,
        fetching: state.fetching
    }
}

export default connect(mapStateToProps, {fetchFriends})(FriendsList);